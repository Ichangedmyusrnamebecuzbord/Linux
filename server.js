// server.js
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

// Minimal rewriting proxy at /proxy?url=...
app.get('/proxy', async (req, res) => {
  const targetUrl = req.query.url;
  if (!targetUrl) {
    return res.status(400).send('No URL provided');
  }

  try {
    // 1. Fetch the target page
    const response = await axios.get(targetUrl, {
      // Some sites require a user-agent to return normal HTML
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });

    // 2. Check Content-Type
    const contentType = response.headers['content-type'] || '';
    // If it's HTML, parse with Cheerio
    if (contentType.includes('text/html')) {
      const $ = cheerio.load(response.data);

      // Remove meta tags that set frame-ancestors or CSP
      $('meta[http-equiv="Content-Security-Policy"]').remove();
      $('meta[http-equiv="X-Frame-Options"]').remove();
      // If the site uses <meta http-equiv="Permissions-Policy"> or other tags, remove those too
      // $('meta[http-equiv="Permissions-Policy"]').remove();

      // You could also rewrite relative links or other references here if needed.

      // 3. Send modified HTML
      res.setHeader('Content-Type', 'text/html');
      res.send($.html());
    } else {
      // For non-HTML (images, scripts, CSS), just pass it through
      res.setHeader('Content-Type', contentType);
      res.send(response.data);
    }
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).send('Error fetching the requested URL');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Rewriting proxy running on port ${PORT}`);
});
