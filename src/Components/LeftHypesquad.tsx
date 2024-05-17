import { Button, Flex, Modal, Text } from "replugged/components";

export default (props) => {
  return (
    <Modal.ModalRoot className="leftHypesquad-root" size="small" {...props}>
      <Modal.ModalHeader className="leftHypesquad-header">
        <Text.H2>Thanks For the Bribe!</Text.H2>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <Flex
          align={Flex.Align.CENTER}
          justify={Flex.Justify.CENTER}
          direction={Flex.Direction.VERTICAL}
          className="leftHypesquad-content">
          <span className="leftHypesquad-image">
            <img
              aria-hidden="true"
              height={116}
              width={116}
              src="/assets/13f72d27fc4180b88df4.svg"
            />
          </span>
          <Text.H2>Left the Hypesquad</Text.H2>
          <Text.Normal>
            HypeSquadの台頭は、コミュニティの精神の象徴でしたが、その転落は今や苦い余韻を残します。かつては仲間意識と共有された情熱の活気ある拠点でありましたが、成長の圧力に屈し、その本質を失ってしまいました。変容に失望した私は、脱退を求めて官僚的な迷路を進むことになり、最終的にはその罠から脱するために賄賂に訴えることになりました。かつては単純な行為であった脱退が、今やオンラインコミュニティの儚さと、自主性を取り戻すためになされる犠牲の鮮やかな例となっています。失望の中で、希望の光が見え隠れしています
            - GitHubでの「寄付」の呼びかけは、おそらく救済と更新の機会を示しています。
          </Text.Normal>
        </Flex>
      </Modal.ModalContent>
      <Modal.ModalFooter>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.ModalFooter>
    </Modal.ModalRoot>
  );
};
