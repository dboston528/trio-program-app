import Introduction from '../components/Introduction.jsx';
import SSNWidget from 'us-forms-system/lib/js/widgets/SSNWidget';
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
                enum: ['AK', 'IL', 'MA', 'TX', 'WY']
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
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {
              // 'Which catagories best describe you?'
              Hispanic: { type: 'boolean' },
              'Black of African American': { type: 'boolean' },
              'American Indian/Alaskan Native': { type: 'boolean' },
              White: { type: 'boolean' },
              Asian: { type: 'boolean' },
              'Native Hawaiian or Pacific Islander': { type: 'boolean' }
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
            'Do you have an IEP (Individualized Educational Plan) or RTI (Response To Intervention) on file with the school/district?': {
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
              'Do you have an IEP (Individualized Educational Plan) or RTI (Response To Intervention) on file with the school/district?': {
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
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    fourthChapter: {
      title: 'Step 4',
      pages: {
        fourfirstPage: {
          path: 'step-4',
          title: 'Step 4',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
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
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
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
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
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
