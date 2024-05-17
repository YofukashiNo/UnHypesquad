import { flux as Flux, modal as ModalUtils, React } from "replugged/common";
import { Button, Divider, Modal, Radio, Text } from "replugged/components";
import { houses } from "../lib/consts";
import Modules from "../lib/requiredModules";
import Utils from "../lib/utils";
import LeftHypesquad from "./LeftHypesquad";
export default ({
  setSelectedHouse,
  submitHouse,
  onClose,
}: {
  setSelectedHouse: (house: string) => void;
  submitHouse: () => void;
  onClose: () => void;
}) => {
  const { HypeSquadStore } = Modules;
  const { haveHouse } = Flux.useStateFromStores([HypeSquadStore], () => ({
    haveHouse: HypeSquadStore.getHouseMembership() != null,
  }));
  const [house, setHouse] = React.useState(
    haveHouse ? HypeSquadStore.getHouseMembership() : houses.bravery,
  );
  React.useEffect(() => {
    setSelectedHouse(house);
  }, [house]);
  const leaveHypesquad = async () => {
    onClose();
    await Utils.leaveHypesquad();
    ModalUtils.openModal((props) => <LeftHypesquad {...props} />);
  };
  return (
    <>
      <Modal.ModalHeader className="hypesquadSelector-header">
        <Text.H2>Select Your House</Text.H2>
      </Modal.ModalHeader>
      <Modal.ModalContent>
        <Text.H4 className="hypesquadSelector-subHeader">
          No need of test, Corruption of hypesquad!
        </Text.H4>
        <Divider className="hypesquadSelector-divider" />
        <Radio
          options={[
            {
              name: "House of Bravery",
              value: houses.bravery,
              icon: () => (
                <img
                  style={{ paddingLeft: "5px" }}
                  aria-hidden="true"
                  height={24}
                  width={24}
                  src="/assets/9ed49adcf136a8e82a02.svg"
                />
              ),
            },
            {
              name: "House of Brilliance",
              value: houses.brillance,
              icon: () => (
                <img
                  style={{ paddingLeft: "5px" }}
                  aria-hidden="true"
                  height={24}
                  width={24}
                  src="/assets/2aab8e81daf29b90936d.svg"
                />
              ),
            },
            {
              name: "House of Balance",
              value: houses.balance,
              icon: () => (
                <img
                  style={{ paddingLeft: "5px" }}
                  aria-hidden="true"
                  height={24}
                  width={24}
                  src="/assets/243060b667acd55230bd.svg"
                />
              ),
            },
            haveHouse
              ? {
                  name: "Leave Hypesquad",
                  value: houses.corruption,
                  icon: () => (
                    <img
                      style={{ paddingLeft: "5px" }}
                      aria-hidden="true"
                      height={24}
                      width={24}
                      src="/assets/13f72d27fc4180b88df4.svg"
                    />
                  ),
                }
              : null,
          ].filter(Boolean)}
          value={house}
          onChange={({ value }) => setHouse(value)}></Radio>
      </Modal.ModalContent>
      <Modal.ModalFooter className="hypesquadSelector-footer" key={house}>
        <Button onClick={house == null ? leaveHypesquad : submitHouse}>
          {house == null ? "Leave Hypesquad" : "Join House"}
        </Button>
        <Button color={Button.Colors.PRIMARY} onClick={onClose}>
          Cancel
        </Button>
      </Modal.ModalFooter>
    </>
  );
};
