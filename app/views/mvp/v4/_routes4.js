// External dependencies
const e = require('express');
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ========================================================================
// MVP PENSIONS REDUNDANCY CALCULATOR
// ========================================================================



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
      const select = req.session.data['check']
  
      if (select == 'yes') {
        // Redirect to EA number page
        res.redirect('manual/ea-number');
      } else {
        // If no back to the membership number page
        res.redirect('membership-number');
      }
    });

    //EA number page
    router.post('/manual/ea-number', (req, res) => {
      res.redirect('member-name')
    });

    //National Insurance number page
    router.post('/manual/national-insurance-number', (req, res) => {
      res.redirect('member-dob')
    });

    //Member's name page
    router.post('/manual/members-name', (req, res) => {
      res.redirect('ni-number')
    });

    //Date of birth page
    router.post('/manual/date-of-birth', (req, res) => {
      // Get the values entered
      const day = req.session.data['birthDay'];
      const month = req.session.data['birthMonth'];
      const year = req.session.data['birthYear'];
    
      // Check if the entered date is 10 12 1980
      if (day === '10' && month === '12' && year === '1980') {
        // send to under 55 at redundancy page
        res.redirect('under-55');
      } else {
        // Otherwise send them to
        res.redirect('state-pension-age');
      }
    });

    //Under 55 page
    router.post('/manual/under-55', (req, res) => {
      res.redirect('start')
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
    router.post('/manual/pension-age', (req, res) => {
      res.redirect('scheme-start-date')
    });

    //Membership number page
    router.post('/membership', (req, res) => {
      let number = req.session.data['memberNumber']

      if (number === '123456789' || number === '123456787' || number === '123456786') {
      res.redirect('full-member-details-found')
      } else if (number === '123456779') {
        res.redirect('complexity-found')
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
        res.redirect('manual/ea-number');
      }
    });

    //Complexity check page
    router.post('/complexity-check', (req, res) => {
      const select = req.session.data['check']

      if (select == 'yes') {
        //redirect to Full member details page
        res.redirect('full-member-details-found');
      } else {
        //redirect to kickout page
        res.redirect('cannot-be-calculated');
      }
      });

      //Check member details page
      router.post('/check-member-details', (req, res) => {
        const pick = req.session.data['allDetails']

        if (pick == 'yes') {
          //redirect to date of estimate spreadsheet page
          res.redirect('reckonable-service-current');
        } else {
          //redirect to date of estimate form page
          res.redirect('estimate-cannot-be-calculated');
        }
        });

      //Employment hours current page (whole time / part time)
      router.post('/employment-hours', (req, res) => {
        res.redirect('reckonable-service-current')
      });

      //Reckonable service current page (non manual data entry route)
      router.post('/reckonable-service', (req, res) => {
        res.redirect('redundancy-details')
      });

      //Total pensionable earnings page
      router.post('/manual/pensionable-earnings', (req, res) => {
        res.redirect('reckonable-service-current1')
      });

      //Total pensionable earnings added page
      router.post('/manual/pensionable-earnings-added', (req, res) => {
        res.redirect('reckonable-service-current1')
      });

      //Redundancy details page
      router.post('/redundancy-details', (req, res) => {
        const pick = req.session.data['receivedBy']

        if (pick == 'spreadsheet') {
          //redirect to date of estimate spreadsheet page
          res.redirect('date-of-estimate-spreadsheet');
        } else {
          //redirect to date of estimate form page
          res.redirect('date-of-estimate-form');
        }
        });

        //Date of estimate form page
        router.post('/date-of-estimate-form', (req, res) => {
          // Get the values entered
          const day = req.session.data['estimateDay'];
          const month = req.session.data['estimateMonth'];
          const year = req.session.data['estimateYear'];
        
          // Check if the entered date is 01 11 2025
          if (day === '01' && month === '11' && year === '2025') {
            // send to under 55 at redundancy page
            res.redirect('under-55-at-redundancy');
          } else {
            // Otherwise send them to
            res.redirect('pensionable-earnings-april-form');
          }
        });

        //Date of estimate spreadsheet page
        router.post('/date-of-estimate-spreadsheet', (req, res) => {
          // Get the values entered
          const day = req.session.data['estimateDay'];
          const month = req.session.data['estimateMonth'];
          const year = req.session.data['estimateYear'];
        
          // If the entered date is 01 11 2025
          if (day === '01' && month === '11' && year === '2025') {
            // send to under 55 at redundancy page
            res.redirect('under-55-at-redundancy');
          } else {
            // Otherwise send them to
            res.redirect('pensionable-earnings-april-spreadsheet');
          }
        });

        //Estimated pensionable earnings form page
        router.post('/pensionable-earning-form', (req, res) => {
          res.redirect('redundancy-pay-form')
        });

        //Estimated pensionable earnings spreadsheet page
        router.post('/pensionable-earning-spreadsheet', (req, res) => {
          res.redirect('redundancy-pay-spreadsheet')
        });

        //Redundancy payment form page
        router.post('/redundancy-pay-form', (req, res) => {
          res.redirect('check-final-details')
        });

         //Redundancy payment spreadsheet page
         router.post('/redundancy-pay-spreadsheet', (req, res) => {
          res.redirect('check-final-details')
        });

        //check final details page
        router.post('/check-final-details', (req, res) => {
          res.redirect('calculation-result')
        });

        //Calculation result page
        router.post('/calculation-result', (req, res) => {
          res.redirect('quality-check')
        });

        // Quality check page
        router.post('/quality-check', (req, res) => {
          const selection = req.session.data['checking']
  
          if (selection == 'yes') {
            //redirect to download successful page
            res.redirect('download-files');
          } else {
            //redirect to EA email address page
            res.redirect('ea-email-address');
          }
          });

          // Ea Email address page
          router.post('/ea-email-address', (req, res) => {
            res.redirect('upload-files')
          });

          //Complexity check clean page
          router.post('/complexity-check-clean', (req, res) => {
            const selection = req.session.data['check']
    
            if (selection == 'yes') {
              //redirect to partial data found page
              res.redirect('partial-member-details-found');
            } else {
              //redirect to kickout page
              res.redirect('cannot-be-calculated');
            }
            });

            // Partial member details found page
            router.post('/partial-member-details-found', (req, res) => {
              const selection = req.session.data['partialDetails']
      
              if (selection == 'yes') {
                //redirect to download successful page
                res.redirect('complete-member-details');
              } else {
                //redirect to EA email address page
                res.redirect('ea-number');
              }
              });

              //Download files page
              router.post('/download-files', (req, res) => {
                //direct back to the start page
                res.redirect('start')
              });

              //Upload files page
              router.post('/upload-files', (req, res) => {
                //direct back to the start page
                res.redirect('start')
              });

              //Scheme start date add page
              router.post('/scheme-start-date-add', (req, res) => {
                //direct to complete member details page 
                res.redirect('complete-member-details')
              });
             
              //Balance carry forward add page
              router.post('/balance-carry-forward-add', (req, res) => {
                //direct to complete member details page 
                res.redirect('check-member-details-amendments')
              });

              //Check member details amendments page
              router.post('/check-member-details-amendments', (req, res) => {
                //direct to complete member details page 
                res.redirect('redundancy-details')
              });

              //Scheme start date page (manual data entry)
              router.post('/manual/start-date', (req, res) => {
                //direct to complete member details page 
                res.redirect('balance-carry-forward')
              });

              //Balance to carry forward page (manual data entry)
              router.post('/manual/balance-forward', (req, res) => {
                //direct to complete member details page 
                res.redirect('total-pensionable-earnings')
              });

              //Employment hours current1 (manual data entry)
              router.post('/manual/employment-hours1', (req, res) => {
                //direct to complete member details page 
                res.redirect('reckonable-service-current1')
              });

              //Reckonable service current 1 (manual data entry)
              router.post('/manual/reckonable-service-manual', (req, res) => {
                //direct to complete member details page 
                res.redirect('redundancy-details1')
              });

              //Redundancy details1 page
              router.post('/manual/redundancy-details1', (req, res) => {
                const pick = req.session.data['receivedBy']
                if (pick == 'spreadsheet') {
                  //redirect to date of estimate spreadsheet1 page
                  res.redirect('date-of-estimate-spreadsheet1');
                } else {
                  //redirect to date of estimate form1 page
                  res.redirect('date-of-estimate-form1');
                }
              });

              //Date of estimate spreadsheet1 page
        router.post('/manual/date-of-estimate-spreadsheet1', (req, res) => {
          // Get the values entered
          const day = req.session.data['estimateDay'];
          const month = req.session.data['estimateMonth'];
          const year = req.session.data['estimateYear'];
        
          // If the entered date is 01 01 1980
          if (day === '01' && month === '1' && year === '1980') {
            // send to under 55 at redundancy page
            res.redirect('under-55-at-redundancy');
          } else {
            // Otherwise send them to
            res.redirect('pensionable-earnings-april-spreadsheet1');
          }
        });

        //Date of estimate form1 page
        router.post('/manual/date-of-estimate-form1', (req, res) => {
          // Get the values entered
          const day = req.session.data['estimateDay'];
          const month = req.session.data['estimateMonth'];
          const year = req.session.data['estimateYear'];
        
          // If the entered date is 01 01 1980
          if (day === '01' && month === '1' && year === '1980') {
            // send to under 55 at redundancy page
            res.redirect('under-55-at-redundancy');
          } else {
            // Otherwise send them to
            res.redirect('pensionable-earnings-april-form1');
          }
        });

        //Estimated pensionable earnings form page
        router.post('/manual/pensionable-earning-form', (req, res) => {
          res.redirect('redundancy-pay-form1')
        });

        //Estimated pensionable earnings spreadsheet page
        router.post('/manual/pensionable-earning-spreadsheet', (req, res) => {
          res.redirect('redundancy-pay-spreadsheet1')
        });

        //Redundancy payment form1 page (manual journey)
        router.post('/manual/redundancy-pay-form1', (req, res) => {
          res.redirect('check-final-details1')
        });

         //Redundancy payment spreadsheet1 page (manual journey)
         router.post('/manual/redundancy-pay-spreadsheet1', (req, res) => {
          res.redirect('check-final-details1')
        });

        //check final details1 page (manual journey)
        router.post('/manual/check-final-details1', (req, res) => {
          res.redirect('calculation-result1')
        });

        //Calculation result1 page (manual journey)
        router.post('/manual/calculation-result1', (req, res) => {
          res.redirect('quality-check1')
        });

        // Quality check1 page (Manual journey)
        router.post('/manual/quality-check1', (req, res) => {
          const selection = req.session.data['checking']
  
          if (selection == 'yes') {
            //redirect to download successful page
            res.redirect('download-files');
          } else {
            //redirect to EA email address page
            res.redirect('ea-email-address');
          }
          });

          // Ea Email address page (manual journey)
          router.post('/manual/ea-email-address', (req, res) => {
            res.redirect('upload-files')
          });

          //Upload files page
          router.post('/manual/upload-files', (req, res) => {
            //direct back to the start page
            res.redirect('v4/start')
          });

          //Download files manual journey page
          router.post('/manual/download-files', (req, res) => {
            //direct back to the start page
            res.redirect('start')
          });

              



















module.exports = router;
