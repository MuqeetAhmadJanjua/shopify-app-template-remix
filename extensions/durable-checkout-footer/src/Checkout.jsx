import {
  reactExtension,
  BlockStack,
  Text,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.actions.render-before",
  () => <Extension />,
);

function Extension() {
  return (
    <BlockStack>
      <Text appearance="subdued">
        By placing this order you are acknowledging that you have read and agree to our terms and conditions.
      </Text>
    </BlockStack>
  );
}
