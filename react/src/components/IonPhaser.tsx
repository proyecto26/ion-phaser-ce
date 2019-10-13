import React from 'react';
import { Game } from 'phaser-ce';

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      'ion-phaser-ce': any
    }
  }
}

interface Props {
  game?: Game;
}

class IonPhaserComponent extends React.Component<Props> {
  ref = React.createRef<Props>();

  updateGame (nextProps: Props) {
    const node = this.ref.current;
    if (!node.game && nextProps.game) {
      node.game = nextProps.game;
    }
  }

  componentDidMount () {
    this.updateGame(this.props);
  }

  componentDidUpdate () {
    this.updateGame(this.props);
  }

  public render (): React.ReactNode {
    return (
      <ion-phaser-ce
        ref={this.ref}
        {...this.props}
      />
    );
  }
};

export default IonPhaserComponent;