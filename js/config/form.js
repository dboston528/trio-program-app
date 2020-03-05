import Introduction from '../components/Introduction.jsx';
import SSNWidget from 'us-forms-system/lib/js/widgets/CurrencyWidget';

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
            'Social Security Number': {
              'ui:widget': SSNWidget
            }
          },
          schema: {
            type: 'object',
            required: ['Social Security Number'],
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
              'Social Security Number': {
                type: 'string',
                pattern: '[0-9]{3}-[0-9]{2}-[0-9]{4}$'
              }
            }
          }
        }
      }
    },
    secondChapter: {
      title: 'Step 2',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    },
    thirdChapter: {
      title: 'Step 2',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    },
    fourthChapter: {
      title: 'Step 4',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    },
    fifthChapter: {
      title: 'Step 5',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    },
    sixthChapter: {
      title: 'Step 6',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    },
    seventhChapter: {
      title: 'Step 2',
      pages: {
        firstPage: {
          path: 'step-2',
          title: 'Step 2',
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
          }
        }
      }
    }
  }
};

export default formConfig;
