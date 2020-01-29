class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.handlePetTheCreature = this.handlePetTheCreature.bind(this);
    this.handleFeedTheCreature = this.handleFeedTheCreature.bind(this);
    this.handleBoopTheCreature = this.handleBoopTheCreature.bind(this);
    this.state = {
      pet_button: 'Pet the creature?',
      snack_button: 'Give the creature a snack?',
      title: '_pixel pet',
      awake: 'awake',
      snacks: 1,
      happy: 1,
      pixel_pet:
      [
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', '~', ' ', ' ', ' ', '~', ' ',
        ' ', ' ', ' ', ' ', ' ', '^', 'x', '^', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', '/', ' ', '/', ' ', ' ',
      ]
    };
  }

  handleBoopTheCreature(pixel_type) {
    if (pixel_type != ' ') {
      this.setState({
        title: '~ pixel boop ~',
        pixel_pet:
        [
          ' ', ' ', ' ', ' ', ' ', ' ', 'B', 'O', 'O', 'P',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', '~', ' ', ' ', ' ', '~', ' ', ' ', ' ',
          ' ', ' ', ' ', 'o', 'x', 'o', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ]
      });
    };
  }

  handlePetTheCreature() {
    if (this.state.awake == 'awake') { this.setState({
        pet_button: 'Thank you for the pets!',
        title: '~ pixel pet ~',
        happy: this.state.happy + 1,
        pixel_pet:
        [
          ' ', ' ', '~', ' ', ' ', ' ', '~', ' ', ' ', ' ',
          ' ', ' ', ' ', '^', 'x', '^', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ]
      })
    } else { this.setState({
        pet_button: 'You woke it up!',
        title: '~ pixel pet ~',
        pixel_pet:
        [
          ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', '.', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', '~', 'X', '-', 'X', '~', ' ', ' ', ' ', ' ',
          ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ', ' ',
        ]
      });
    }
  }

  handleFeedTheCreature() {
    if (this.state.awake == 'awake') { this.setState({
        snack_button: 'Thank you for the snack!',
        title: '~ pixel pet ~',
        snacks: this.state.snacks + 1,
        happy: this.state.happy + 1,
        pixel_pet:
        [
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', '~', '^', 'O', '^', '~', ' ', ' ', ' ',
          ' ', ' ', ' ', '>', 'M', '<', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ]
      })
    } if (this.state.snacks > 5) { this.setState({
        snack_button: 'Too many snacks!',
        title: '~ pixel pet ~',
        snacks: this.state.snacks,
        pixel_pet:
        [
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', '~', 'o', '-', 'o', '~', ' ', ' ', ' ',
          ' ', ' ', ' ', '>', 'M', '<', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ]
      })
    } if (this.state.awake == 'asleep') { this.setState({
        snack_button: 'You woke it up!',
        title: '~ pixel pet ~',
        pixel_pet:
        [
          ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', '.', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', '~', 'X', '-', 'X', '~', ' ', ' ', ' ', ' ',
          ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ', ' ',
        ]
      });
    };
  }

  handleAnimatePet() {
    var newHappy = this.state.happy;
    var newSnacks = this.state.snacks;
    var now = new Date();
    if (now.getHours() > 21 || now.getHours() < 8) {
      this.setState({
        awake: 'asleep',
      });
    } else {
      this.setState({
        awake: 'awake',
      });
    };
    if (this.state.title == '_pixel pet' && this.state.awake == 'awake') {
        var newTitle = 'pixel pet_';
        var newPet =
        [
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          '~', '^', 'x', '^', '~', ' ', ' ', ' ', ' ', ' ',
          ' ', '\\', ' ', '\\', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ];
    } else if (this.state.title == 'pixel pet_' && this.state.awake == 'awake') {
      var newTitle = '_pixel pet';
      var newPet =
      [
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ' ', ' ', ' ', ' ', '~', '^', 'x', '^', '~', ' ',
        ' ', ' ', ' ', ' ', ' ', '/', ' ', '/', ' ', ' ',
      ];
    } else if (this.state.title == '_pixel pet' && this.state.awake == 'asleep') {
        var newTitle = 'pixel pet_';
        var newHappy = 1;
        var newSnacks = 1;
        var newPet =
        [
          ' ', ' ', ' ', ' ', ' ', 'Z', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', 'z', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          '~', 'U', 'x', 'U', '~', ' ', ' ', ' ', ' ', ' ',
          ' ', '/', ' ', '/', ' ', ' ', ' ', ' ', ' ', ' ',
        ];
    } else if (this.state.title == 'pixel pet_' && this.state.awake == 'asleep') {
        var newTitle = '_pixel pet';
        var newHappy = 1;
        var newSnacks = 1;
        var newPet =
        [
          ' ', ' ', ' ', ' ', ' ', 'z', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', 'Z', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', '~', 'U', 'x', 'U', '~', ' ', ' ', ' ', ' ',
          ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ', ' ',
        ];
    } else if (this.state.awake == 'asleep') {
        var newTitle = '_pixel pet';
        var newPet =
        [
          ' ', ' ', ' ', ' ', ' ', 'o', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', '.', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', '~', 'U', '-', 'U', '~', ' ', ' ', ' ', ' ',
          ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ', ' ',
      ];
    } else {
        var newTitle = '_pixel pet';
        var newPet =
        [
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
          ' ', ' ', '~', ' ', ' ', ' ', '~', ' ', ' ', ' ',
          ' ', ' ', ' ', '^', 'x', '^', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', '/', ' ', '/', ' ', ' ', ' ', ' ',
          ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',
        ];
    }
    if ( this.state.awake == 'awake' && now.getSeconds() % 10 === 0 && this.state.snacks > 0 ) {
      newSnacks = this.state.snacks - 1
    }
    if ( this.state.awake == 'awake' && now.getSeconds() % 5 === 0 && this.state.happy > 0 ) {
      newHappy = this.state.happy - 1
    }
    ;
    this.setState({
      pet_button: 'Pet the creature?',
      snack_button: 'Give the creature a snack?',
      happy: newHappy,
      snacks: newSnacks,
      title: newTitle,
      pixel_pet: newPet
    });
  }

  renderPixel(pixel_type) {
    return (
      <button className="pixel"
        onClick={() => this.handleBoopTheCreature(pixel_type)}>
        {pixel_type}
      </button>
    );
  }

  renderPet(pixel_pet) {
    return (
      <div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[0])}
          {this.renderPixel(pixel_pet[1])}
          {this.renderPixel(pixel_pet[2])}
          {this.renderPixel(pixel_pet[3])}
          {this.renderPixel(pixel_pet[4])}
          {this.renderPixel(pixel_pet[5])}
          {this.renderPixel(pixel_pet[6])}
          {this.renderPixel(pixel_pet[7])}
          {this.renderPixel(pixel_pet[8])}
          {this.renderPixel(pixel_pet[9])}
        </div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[10])}
          {this.renderPixel(pixel_pet[11])}
          {this.renderPixel(pixel_pet[12])}
          {this.renderPixel(pixel_pet[13])}
          {this.renderPixel(pixel_pet[14])}
          {this.renderPixel(pixel_pet[15])}
          {this.renderPixel(pixel_pet[16])}
          {this.renderPixel(pixel_pet[17])}
          {this.renderPixel(pixel_pet[18])}
          {this.renderPixel(pixel_pet[19])}
        </div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[20])}
          {this.renderPixel(pixel_pet[21])}
          {this.renderPixel(pixel_pet[22])}
          {this.renderPixel(pixel_pet[23])}
          {this.renderPixel(pixel_pet[24])}
          {this.renderPixel(pixel_pet[25])}
          {this.renderPixel(pixel_pet[26])}
          {this.renderPixel(pixel_pet[27])}
          {this.renderPixel(pixel_pet[28])}
          {this.renderPixel(pixel_pet[29])}
        </div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[30])}
          {this.renderPixel(pixel_pet[31])}
          {this.renderPixel(pixel_pet[32])}
          {this.renderPixel(pixel_pet[33])}
          {this.renderPixel(pixel_pet[34])}
          {this.renderPixel(pixel_pet[35])}
          {this.renderPixel(pixel_pet[36])}
          {this.renderPixel(pixel_pet[37])}
          {this.renderPixel(pixel_pet[38])}
          {this.renderPixel(pixel_pet[39])}
        </div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[40])}
          {this.renderPixel(pixel_pet[41])}
          {this.renderPixel(pixel_pet[42])}
          {this.renderPixel(pixel_pet[43])}
          {this.renderPixel(pixel_pet[44])}
          {this.renderPixel(pixel_pet[45])}
          {this.renderPixel(pixel_pet[46])}
          {this.renderPixel(pixel_pet[47])}
          {this.renderPixel(pixel_pet[48])}
          {this.renderPixel(pixel_pet[49])}
        </div>
        <div className="grid-row">
          {this.renderPixel(pixel_pet[50])}
          {this.renderPixel(pixel_pet[51])}
          {this.renderPixel(pixel_pet[52])}
          {this.renderPixel(pixel_pet[53])}
          {this.renderPixel(pixel_pet[54])}
          {this.renderPixel(pixel_pet[55])}
          {this.renderPixel(pixel_pet[56])}
          {this.renderPixel(pixel_pet[57])}
          {this.renderPixel(pixel_pet[58])}
          {this.renderPixel(pixel_pet[59])}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.handleAnimatePet(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      console.log(this.state.happy),
     <div className="pet">
      <h2 id='title'>
        <a id="aishalink" href="/">
          {this.state.title}
        </a>
      </h2>
      <div>
        <h3>
          {this.state.snacks > 0 && this.state.happy > 0
            ? 'pixel pet is content. ' : 'pixel pet needs some attention. ' }
          {this.state.snacks == 0 ? 'pixel pet is hungry. ' : null }
        </h3>
      </div>
      <div className="pet-grid">
        {this.renderPet(this.state.pixel_pet)}
     </div>
     <div>
       <button id='tamagotchi' onClick={this.handlePetTheCreature}>
        {this.state.pet_button}
       </button>
       <br />
       <button id='tamagotchi' onClick={this.handleFeedTheCreature}>
        {this.state.snack_button}
       </button>
     </div>
    </div>
    );
  }
}

ReactDOM.render(<Pet />, document.getElementById('content'));
