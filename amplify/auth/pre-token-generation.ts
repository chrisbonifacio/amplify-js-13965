import { PreTokenGenerationTriggerHandler } from "aws-lambda";

export const handler: PreTokenGenerationTriggerHandler = async (
  event,
  context
) => {
  try {
    console.log(event);
    // Extract user data from Cognito context
    const userAttributes = event.request.userAttributes;

    // Get the custom attribute value (replace 'your_custom_attribute' with your actual attribute name)
    const customAttributeValue = userAttributes["custom:tenant"];

    // Update the claims with the custom claim object
    event.response.claimsOverrideDetails = {
      claimsToAddOrOverride: {
        "custom:tenant": customAttributeValue,
      },
    };

    console.log(event);

    return event;
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error for Lambda to handle
  }
};
