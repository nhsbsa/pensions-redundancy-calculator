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

// Schemes page
router.post('/schemes', (req, res) => {
      const select = req.session.data['scheme']
  
      if (select == '2015') {
        // Redirect to your special 2015-only page
        res.redirect('complexities-list');
      } else {
        // Default page for all other selections
        res.redirect('scheme-selection-kickout');
      }
    });

    // Scheme selection kickout page
    router.post('/kickout', (req, res) => {
      res.redirect('start')
    });

    //Membership number not found page
    router.post('/membership-error', (req, res) => {
      res.redirect('membership-number')
    });

    //EA number page
    router.post('/ea-number', (req, res) => {
      res.redirect('member-name')
    });

    //National Insurance number page
    router.post('/national-insurance-number', (req, res) => {
      res.redirect('member-dob')
    });

    //Member's name page
    router.post('/members-name', (req, res) => {
      res.redirect('ni-number')
    });

    //Date of birth page
    router.post('/date-of-birth', (req, res) => {
      res.redirect('state-pension-age')
    });
   



module.exports = router;
