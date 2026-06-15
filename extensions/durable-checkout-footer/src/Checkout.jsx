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
        By placing an order, you acknowledge reading and agreeing to our terms
        and conditions
      </Text>
    </BlockStack>
  );
}
