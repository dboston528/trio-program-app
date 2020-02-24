import Introduction from '../components/Introduction.jsx';

const formConfig = {
  title: 'Step 1',
  subTitle: 'Student Information',
  formId: '',
  urlPrefix: '/',
  trackingPrefix: 'form-',
  transformForSubmit: '',
  submitUrl: '',
  introduction: Introduction,
  confirmation: '',
  defaultDefinitions: {},
  chapters: {
    firstChapter: {
      title: 'First Chapter',
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
          path: 'first-chapter/second-page',
          title: 'Second Page',
          uiSchema: {},
          schema: {
            type: 'object',
            properties: {}
          }
        }
      }
    },
    secondChapter: {
      title: 'Second Chapter',
      pages: {}
    }
  }
};

export default formConfig;
