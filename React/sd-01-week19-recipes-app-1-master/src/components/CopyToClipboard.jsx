import React from 'react';
import useClipboard from 'react-use-clipboard';
import 'remixicon/fonts/remixicon.css';

export default function ShareRecipe() {
  const [isCopied, setCopied] = useClipboard(window.location.href, {
    successDuration: 1000,
  });

  const isCopiedIconClass = isCopied
    ? 'ri-share-fill ri-xl'
    : 'ri-share-line ri-xl';
  const showAlert = () => {
    alert('link copiado!');
    setCopied();
  };

  return <button className={isCopiedIconClass} onClick={showAlert} />;
}
