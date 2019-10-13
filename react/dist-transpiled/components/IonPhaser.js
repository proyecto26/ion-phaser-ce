import React from 'react';
class IonPhaserComponent extends React.Component {
    constructor() {
        super(...arguments);
        this.ref = React.createRef();
    }
    updateGame(nextProps) {
        const node = this.ref.current;
        if (!node.game && nextProps.game) {
            node.game = nextProps.game;
        }
    }
    componentDidMount() {
        this.updateGame(this.props);
    }
    componentDidUpdate() {
        this.updateGame(this.props);
    }
    render() {
        return (React.createElement("ion-phaser-ce", Object.assign({ ref: this.ref }, this.props)));
    }
}
;
export default IonPhaserComponent;
//# sourceMappingURL=IonPhaser.js.map