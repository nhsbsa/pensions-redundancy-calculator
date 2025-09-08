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
   
    //Complexities list page
    router.post('/complexities-list', (req, res) => {
      const select = req.session.data['complexities']
  
      if (select == 'yes') {
        // Redirect to your special 2015-only page
        res.redirect('cannot-be-calculated');
      } else {
        // Default page for all other selections
        res.redirect('membership-number');
      }
    });

    //Cannot be calculated page
    router.post('/cannot-be-calculated', (req, res) => {
      res.redirect('start')
    });

    //State pension age page
    router.post('/pension-age', (req, res) => {
      res.redirect('scheme-start-date')
    });

    //Membership number page
    router.post('/membership', (req, res) => {
      let number = req.session.data['memberNumber']

      if (number == '123456789') {
      res.redirect('full-member-details-found')
    } else {
      res.redirect('membership-number-not-found')
    }
    });

    //full member details page
    router.post('/full-member-details-found', (req, res) => {
      const pick = req.session.data['fullDetails']
  
      if (pick == 'yes') {
        // Redirect to Check member details page
        res.redirect('check-member-details');
      } else {
        // Redirect to EA number page (manual data entry)
        res.redirect('ea-number');
      }
    });




module.exports = router;
