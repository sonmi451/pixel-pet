import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default class PixelPet extends React.Component {

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
  var pixel = JSON.stringify(pixel_type);
  return (
    // <Button
    //   style={styles.pet}
    //   title={pixel}
    //   onPress={() => this.handleBoopTheCreature(pixel)}>

    <View style={styles.pixel}>
    <Text style={styles.pixelText}>
    {pixel_type}
    </Text>
    </View>
  );
}

renderPet(pixel_pet) {
  return (
    <View>
    <View style={styles.pixelRow}>
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
    </View>
    <View style={styles.pixelRow}>
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
    </View>
    <View style={styles.pixelRow}>
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
    </View>
    <View style={styles.pixelRow}>
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
    </View>
    <View style={styles.pixelRow}>
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
    </View>
    </View>
  );
}

componentDidMount() {
  this.interval = setInterval(() => this.handleAnimatePet(), 2000);
}

componentWillUnmount() {
  clearInterval(this.interval);
};


render() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {this.state.title}
      </Text>
      <Text style={styles.subTitleText}>
        {this.state.snacks > 0 && this.state.happy > 0
          ? 'pixel pet is content. ' : 'pixel pet needs some attention. ' }
        {this.state.snacks == 0 ? 'pixel pet is hungry. ' : null }
      </Text>
      <View style={styles.pixelPetContainer}>
        {this.renderPet(this.state.pixel_pet)}
      </View>
      <View style={styles.buttonContainer}>
        <Button title={this.state.pet_button} onPress={this.handlePetTheCreature} />
        <Button title= {this.state.snack_button} onPress={this.handleFeedTheCreature} />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3bded',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 26,
    color: '#1e3c72',
    padding: 10,
  },
  subTitleText: {
    fontSize: 16,
    color: '#1e3c72',
    padding: 10,
  },
  pixelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  pixel: {
    width: 40,
    height: 40,
  },
  pixelText: {
    fontSize: 30,
    color: '#1e3c72'
  },
  buttonContainer: {
    paddingTop: 50,
    color: '#1e3c72'

  }
});

// * {
// 	background-color: #a3bded;
// 	color: #1e3c72;
// 	font-family:'Roboto', sans-serif;
// 	font-size: 20px;
// }
//
// body {
// 	padding-top: 10px;
// 	padding-right: 10px;
// 	padding-left: 10px;
// 	padding-bottom: 10px;
// }
//
// h3 {
// 	font-size: 10px;
// }
//
// a:link {
// 	text-decoration: none;
// 	color: inherit;
// }
//
// a:visited{
// 	text-decoration: none;
// 	color: inherit;
// }
//
// a:hover {
// 	color: #F67280;
// 	text-decoration: bold;
// }
//
// div.pet-grid {
// 	display: flex;
// 	flex-flow: row nowrap;
// 	justify-content: center;
// }
//
// button.pixel {
// 	background-color: inherit;
// 	color: inherit;
// 	border: none;
// 	padding: 1%;
// 	width: 30px;
// 	height: 30px;
//   text-align: center;
//   font-size: 20px;
// }
//
// button.pixel:focus {
//   outline: none;
// }
//
// button#tamagotchi {
// 	background-color: #1e3c72;
// 	color: #F67280;
// 	padding: 10px;
// 	margin: 10px;
// 	border: none;
//   text-align: center;
// 	font-size: 20px;
// }
