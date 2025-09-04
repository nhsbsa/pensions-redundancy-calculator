// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

//MVP Routing//

module.exports = function (router) {
  
    router.post('complexities-list', function (req, res) {
      const scheme = req.body.scheme;
  
      if (scheme === '2015') {
        // Redirect to your special 2015-only page
        res.redirect('/complexities-list');
      } else {
        // Default page for all other selections
        res.redirect('/scheme-selection-kickout');
      }
    });
  
  };


module.exports = router;
