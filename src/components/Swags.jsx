import React from '', { useState, useRef, useEffect } from 'react';

const Swags = () => {
  const [userName, setUserName] = useState('Your Name Here');
  const [photoURL, setPhotoURL] = useState('/api/placeholder/300/250');
  const [canDownload, setCanDownload] = useState(false);
  const [badgeDataURL, setBadgeDataURL] = useState('');
  const fileInputRef = useRef(null);
  const badgeRef = useRef(null);
  
  const handleNameChange = (e) => {
    setUserName(e.target.value || 'Your Name Here');
  };
  
  const handlePhotoUpload = () => {
    fileInputRef.current.click();
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPhotoURL(event.target.result);
        setCanDownload(true);
      };
      reader.readAsDataURL(file);
    }
  };
  
  useEffect(() => {
    if (canDownload && badgeRef.current) {
      const simulatedDataURL = photoURL;
      setBadgeDataURL(simulatedDataURL);
    }
  }, [photoURL, canDownload]);
  
  const handleDownload = () => {
    if (!canDownload) {
      alert('Please upload a photo first before downloading your badge');
      return;
    }
    
    const link = document.createElement('a');
    link.download = `acehack-badge-${userName.replace(/\s+/g, '-').toLowerCase()}.png`;
    link.href = badgeDataURL;
    link.click();
    
    alert(`Your badge with name "${userName}" has been downloaded!`);
  };
  
  const handleShare = () => {
    if (!canDownload) {
      alert('Please upload a photo first before sharing your badge');
      return;
    }
    
    if (navigator.share) {
      navigator.share({
        title: `My AceHack 4.0 Digital Badge - ${userName}`,
        text: `Check out my AceHack 4.0 Digital Badge with name "${userName}"! #AceHack @AceHack_uemj`,
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    } else {
      const shareText = `Check out my AceHack 4.0 Digital Badge with name "${userName}"! #AceHack @AceHack_uemj`;
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Share text copied to clipboard! You can now paste it on your favorite social media platform.'))
        .catch(err => console.error('Could not copy text: ', err));
    }
  };

  // The rest of the JSX remains the same as in your original code
  return (
    <div style={{
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem'
    }}>
      {/* ... rest of your JSX structure ... */}
    </div>
  );
};

export default Swags;