import React, { useEffect, useState } from 'react';

interface LinkPreviewProps {
  url: string;
}

const getMetaTag = (doc: Document, property: string): string | null => {
  const meta = doc.querySelector(`meta[property='${property}'], meta[name='${property}']`);
  return meta ? meta.getAttribute('content') : null;
};

const LinkPreview: React.FC<LinkPreviewProps> = ({ url }) => {
  const [title, setTitle] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        setTitle(getMetaTag(doc, 'og:title') || doc.title);
        setImage(getMetaTag(doc, 'og:image'));
        setLoading(false);
      })
      .catch(() => {
        setError('Could not fetch preview');
        setLoading(false);
      });
  }, [url]);

  if (loading) return <div className="p-2 text-sm text-gray-400">Loading preview...</div>;

  // Fallback: if error or no preview, show a clickable link
  if (error || (!title && !image)) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="block border rounded-lg p-2 hover:bg-gray-50 transition text-blue-600 break-all">
        {url}
      </a>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block border rounded-lg p-2 hover:bg-gray-50 transition">
      {image && <img src={image} alt={title || url} className="w-full max-h-40 object-cover rounded mb-2" />}
      <div className="font-semibold text-base mb-1">{title || url}</div>
      <div className="text-xs text-blue-600 break-all">{url}</div>
    </a>
  );
};

export default LinkPreview; 