// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MVP PENSIONS REDUNDANCY CALCULATOR
// ========================================================================


// Start page
router.post( /start/, (req, res) => {
    res.redirect('scheme')
});

// Complexities List - Scheme Selection
router.post('complexities-list', function (req, res) {
      const scheme = req.session.data['scheme']
  
      if (scheme === '2015') {
        // Redirect to your special 2015-only page
        res.redirect('/complexities-list');
      } else {
        // Default page for all other selections
        res.redirect('/scheme-selection-kickout');
      }
    });



module.exports = router;
