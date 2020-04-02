import Introduction from '../components/Introduction.jsx';
import SSNWidget from 'us-forms-system/lib/js/widgets/SSNWidget';
import { currencyConfig } from 'us-forms-system/lib/js/definitions/currency';
import CurrencyWidget from 'us-forms-system/lib/js/widgets/CurrencyWidget';
import { ssnConfig } from 'us-forms-system/lib/js/definitions/ssn';

const formConfig = {
  title: 'Trio Application',
  subTitle: 'Family Centered Educational Agency',
  formId: '1234',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: 'mongodb://localhost:27017/trio',
  introduction: Introduction,
  confirmation: 'Thanks for submitting the application',
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'Step 1',
      pages: {
        firstPage: {
          path: 'step-1',
          title: 'Step 1',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {
              'Last Name': { type: 'string' },
              'First Name': { type: 'string' },
              street: {
                type: 'string'
              },
              city: {
                type: 'string'
              },
              State: {
                type: 'string',
                enum: ['IL', 'TX']
              },
              zip: {
                type: 'string',
                pattern: '^[0-9]{5,9}$'
              }
            }
          },
          uiSchema: {
            street: {
              'ui:title': 'Street'
            },
            city: {
              'ui:title': 'City'
            }
          }
        },
        secondPage: {
          path: 'step-1/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {
              'Student E-Mail': {
                type: 'string'
              },
              'Parent E-Mail': {
                type: 'string'
              },
              'Student Phone Number': {
                type: 'string'
              },
              'Parent Phone Number': {
                type: 'string'
              }
            }
          }
        },
        thirdPage: {
          path: 'step-1/third-page',
          title: 'third Page',
          uiSchema: {
            ssn: {
              'ui:widget': SSNWidget,
              'ui:title': 'Social Security number',
              'ui:errorMessages': {
                required: 'Please enter your SSN',
                pattern: 'Please enter a valid 9 digit SSN (dashes not allowed)'
              }
            }
          },
          schema: {
            type: 'object',
            required: ['ssn'],
            properties: {
              'School/College Currently Attending': {
                type: 'string'
              },
              'School Student ID# (if applicable)': {
                type: 'string'
              },
              Grade: {
                type: 'string',
                enum: [
                  '6th Grade',
                  '7th Grade',
                  '8th Grade',
                  '9th Grade',
                  '10th Grade',
                  '11th Grade',
                  '12th Grade'
                ]
              },
              ssn: {
                type: 'string'
                // pattern: '^[0-9]{9}$'
              }
            }
          }
        }
      }
    },
    secondChapter: {
      title: 'Step 2',
      pages: {
        twofirstPage: {
          path: 'step-2',
          title: 'Step 2',
          uiSchema: {
            race: {
              'ui:title':
                'Are you White, Black or African-American, American Indian or Alaskan Native, Asian, Native Hawaiian or other Pacific Islander, or some other race?',
              hsp: {
                'ui:title': 'Hispanic'
              },
              blk: {
                'ui:title': 'Black or African-American'
              },
              amia: {
                'ui:title': 'American Indian or Alaskan Native'
              },
              wht: {
                'ui:title': 'White'
              },
              asn: {
                'ui:title': 'Asian'
              },
              nhp: {
                'ui:title': 'Native Hawiian or other Pacific Islander'
              },
              //@TODO - condition here, if possible and form field to specify.
              sor: {
                'ui:title': 'Some other Race (Please specify)'
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              race: {
                type: 'object',
                properties: {
                  hsp: { type: 'boolean' },
                  blk: { type: 'boolean' },
                  amia: { type: 'boolean' },
                  wht: { type: 'boolean' },
                  asn: { type: 'boolean' },
                  nhp: { type: 'boolean' },
                  sor: { type: 'boolean' }
                }
              }
            }
          }
        },
        twoSecondPage: {
          path: 'step-2-page2',
          title: 'step 2 page 2',
          uiSchema: {
            'How do you identify?': {
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  male: 'Male',
                  female: 'Female'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              Gender: {
                type: 'string',
                enum: ['Male', 'Female']
              },
              Birthdate: { type: 'string' },
              Age: { type: 'string' },
              'Graduation Year': { type: 'string' }
            }
          }
        },
        twoThirdPage: {
          path: 'step2-page3',
          title: 'step 2 page 3',
          uiSchema: {
            iep: {
              'ui:title':
                'Do you have an IEP (Individualized Educational Plan) or RTI (Response To Intervention) on file with the school/district?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'yes',
                  no: 'no'
                }
              }
            },
            'Are you currently participating in any TRiO programs?': {
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'yes',
                  no: 'no'
                }
              }
            },
            'If you answered yes, please select the names of the program(s)': {
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  'upward bound': 'Upward Bound',
                  '': 'no'
                }
              }
            },
            upwardBound: {
              'ui:title': 'Upward Bound'
            },
            trioPrograms: {
              'ui:title':
                'If you answered yes, please select the names of the program(s)',
              'ui:description': 'You may check more than one.',
              upwardBound: {
                'ui:title': 'Upward Bound'
              },
              ubms: {
                'ui:title': 'Upward Bound Math & Science'
              },
              vub: {
                'ui:title': 'Veterans Upward Bound'
              },
              eoc: {
                'ui:title': 'Educational Oppurtunity Centers'
              },
              gu: {
                'ui:title': 'Gear UP'
              },
              ts: {
                'ui:title': 'Talent Search'
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              iep: {
                type: 'string',
                enum: ['yes', 'no']
              },
              'Are you currently participating in any TRiO programs?': {
                type: 'string',
                enum: ['yes', 'no']
              },
              trioPrograms: {
                type: 'object',
                properties: {
                  upwardBound: { type: 'boolean' },
                  ubms: { type: 'boolean' },
                  vub: { type: 'boolean' },
                  eoc: { type: 'boolean' },
                  gu: { type: 'boolean' },
                  ts: { type: 'boolean' }
                }
              }
            }
          }
        }
      }
    },
    thirdChapter: {
      title: 'Step 3',
      pages: {
        threefirstPage: {
          path: 'step-3',
          title: 'Step 3',
          uiSchema: {
            usCitizen: {
              'ui:title': 'Are you a U.S. Citizen?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            },
            noUs: {
              'ui:title':
                'If you are not a U.S. Cititzen, are you a permanent resident?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            },
            prNumber: {
              'ui:title': 'Enter Permanent Resident Alien Number'
            },
            fosterCare: {
              'ui:title': 'Are you in foster care?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            },
            homeless: {
              'ui:title': 'Are you homeless',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              usCitizen: {
                type: 'string',
                enum: ['yes', 'no']
              },
              noUs: {
                type: 'string',
                enum: ['yes', 'no']
              },
              prNumber: {
                type: 'string'
              },
              fosterCare: {
                type: 'string',
                enum: ['yes', 'no']
              },
              homeless: {
                type: 'string',
                enum: ['yes', 'no']
              }
            }
          }
        }
      }
    },
    //Make dynamcic & add conditional logic
    fourthChapter: {
      title: 'Step 4',
      pages: {
        fourfirstPage: {
          path: 'step-4',
          title: 'Step 4',
          uiSchema: {
            father: {
              'ui:title': 'Has your father recieved/earned a four-year degree?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            },
            fatherSchool: { 'ui:title': 'If yes, name of school' },
            mother: {
              'ui:title': 'Has your mother recieved/earned a four-year degree?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  yes: 'Yes',
                  no: 'No'
                }
              }
            },
            motherSchool: {
              'ui:title': 'If yes, name of school'
            }
          },
          schema: {
            type: 'object',
            properties: {
              father: {
                type: 'string',
                enum: ['yes', 'no']
              },
              fatherSchool: {
                type: 'string'
              },
              mother: {
                type: 'string',
                enum: ['yes', 'no']
              },
              motherSchool: {
                type: 'string'
              }
            }
          }
        },
        fourSecondPage: {
          path: 'step-4-page2',
          title: 'Step 4',
          uiSchema: {
            parentSupport: {
              'ui:title':
                'Which parent did you regulary reside with and recieve support from during your childhood? (i.e., until you were 18 years old)?',
              'ui:widget': 'radio',
              'ui:options': {
                labels: {
                  mother: 'Mother',
                  father: 'Father',
                  both: 'Both Mother and Father',
                  neither: 'Neither Mother not Father'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              parentSupport: {
                type: 'string',
                enum: ['mother', 'father', 'both', 'neither']
              }
            }
          }
        }
      }
    },
    fifthChapter: {
      title: 'Step 5',
      pages: {
        fivefirstPage: {
          path: 'step-5',
          title: 'Step 5',
          uiSchema: {
            step5: {
              'ui:title':
                //Add age condition
                'If you are at least 24 years old, ignore the questions in STEP 5 and skip ahead to STEP 6',
              collegeStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              },
              maritalStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              },
              childrenStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              },
              dependantStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              },
              parentStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              },
              veteranStatus: {
                'ui:title':
                  'Are you in college and working on a master’s or doctorate program (e.g., M.A., MBA, MD, JD, PhD, Ed.D? ',
                'ui:widget': 'radio',
                'ui:options': {
                  labels: {
                    yes: 'Yes',
                    no: 'No'
                  }
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              step5: {
                type: 'object',
                properties: {
                  collegeStatus: { type: 'string', enum: ['yes', 'no'] },
                  maritalStatus: { type: 'string', enum: ['yes', 'no'] },
                  childrenStatus: { type: 'string', enum: ['yes', 'no'] },
                  dependantStatus: { type: 'string', enum: ['yes', 'no'] },
                  parentStatus: { type: 'string', enum: ['yes', 'no'] },
                  veteranStatus: { type: 'string', enum: ['yes', 'no'] }
                }
              }
            }
          }
        }
      }
    },
    sixthChapter: {
      title: 'Step 6',
      pages: {
        sixfirstPage: {
          path: 'step-6',
          title: 'Step 6',
          uiSchema: {
            step6: {
              'ui:title':
                'You must answer the questions in STEP 6 if you are at least 24 years old or you answered YES to any of the questions in STEP 5.',
              familyTotal: {
                'ui:title':
                  'What is the total number of persons in your family?'
              },
              taxIncome: {
                // Need to figure out how to use thewidget below.
                // 'ui:widget': CurrencyWidget
                'ui:title':
                  '  My family’s taxable (not total) income from the last calendar year was: '
              },
              didFileTaxes: {
                'ui:title':
                  'Did you file an income tax return in the last calendar year?',
                'ui:widget': 'radio',
                'ui:options': {
                  yes: 'Yes',
                  no: 'no'
                }
              },
              noTaxIncome: {
                'ui:title':
                  '  I attest that my family did not file a federal income tax return for the last calendar year. My family’s income was:'
              },
              didIncome: {
                'ui:title':
                  'Did you recieve an taxable income in the lat calendar year?',
                'ui:widget': 'radio',
                'ui:options': {
                  yes: 'Yes',
                  yes: 'Yes'
                }
              }
            }
          },
          schema: {
            type: 'object',
            properties: {
              step6: {
                type: 'object',
                properties: {
                  familyTotal: { type: 'string' },
                  didIncome: { type: 'string', enum: ['yes', 'no'] },
                  didFileTaxes: { type: 'string', enum: ['yes', 'no'] },
                  taxIncome: { type: 'string' },
                  noTaxIncome: { type: 'string' }
                }
              }
            }
          }
        }
      }
    },
    seventhChapter: {
      title: 'Step 7',
      pages: {
        sevenfirstPage: {
          path: 'step-7',
          title: 'Step 7',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    }
  }
};

export default formConfig;
