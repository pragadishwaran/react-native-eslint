import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Header, Title, Content,
  Left, Right, Body, DatePicker, Button, Icon } from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';

export default class ViewTimeSheet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            tableHead: ['Comments', 'Hours'],
            tableData: [
                        ['standup meeting', '0:30'],
                        ['standup meeting', '0:30'],
                        ['standup meeting', '0:30'],
                        ['Total', '1:30']
                        ]
        };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
      }
  render() {
    const state = this.state;
    return (
      <Container>
        <Header>
            <Button 
              transparent 
              onPress={() => this.props.navigation.goBack()} 
            >
              <Icon name='arrow-back' />
            </Button>
          <Body>
            <Title style={{ marginLeft: 80 }}>Time Sheet </Title>
          </Body>
        </Header>
        <Content>
            <View style={{ alignItems: 'center' }}>
            <DatePicker
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent
            animationType={'fade'}
            androidMode={'default'}
            placeHolderText='Select date'
            textStyle={{ color: 'black' }}
            placeHolderTextStyle={{ color: '#d3d3d3' }}
            onDateChange={this.setDate}
            disabled={false}
            />
            </View>

            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={state.tableData} textStyle={styles.text} />
        </Table>
        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
  });
