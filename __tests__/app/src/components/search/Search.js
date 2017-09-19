/**
 * Created by ravindras on 14/09/17.
 */
import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, ART } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from '../common';
import { searchTextChanged, searchTextClear } from '../../actions'
import * as shape from 'd3-shape';


console.log('shape',shape);

class Search extends Component {

    data = [
        {"number":  8, "name": 'Fun activities'},
        {"number": 7, "name": 'Dog'},
        {"number": 16, "name": 'Food'},
        {"number": 23, "name": 'Car'},
        {"number": 42, "name": 'Rent'},
        {"number":  4, "name": 'Misc'},
    ];

    onClear() {
        this.props.searchTextClear();
    }

    onSearch( text ) {
        this.props.searchTextChanged(text);
    }

    onRender({item}) {

        return (
            <Card>
                <Text>{item.name}</Text>
            </Card>
        )
    }

    render() {

        return (
            <View style={ styles.searchViewStyle }>

                <Card>
                    <CardSection>
                        <TextInput placeholder={'Search'}
                                   autoFocus={true}
                                   autoCorrect={false}
                                   keyboardType={'web-search'}
                                   style={styles.searchTextInputStyle}
                                   onChangeText={this.onSearch.bind(this)}
                                   value={this.props.searchText}
                        />
                        <TouchableOpacity
                            style={styles.clearTextTouchableStyle}
                            onPress={this.onClear.bind(this)}>
                            <Text style={styles.clearTextStyle}>Clear</Text>
                        </TouchableOpacity>
                    </CardSection>
                </Card>
                <FlatList
                    data={this.props.search_results}
                    renderItem={this.onRender.bind(this)}
                />
            </View>
        );
    }
}

const styles = {
    searchViewStyle:{
        flex:1,
        position: 'relative'
    },

    searchTextInputStyle:{
        color:'#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 20,
        lineHeight: 23,
        flex:1
    },

    clearTextStyle:{
        color:'#cb4f30',
        lineHeight:23,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize:15,
    },

    clearTextTouchableStyle:{
        position:'absolute',
        right:0,
        top:5,
        bottom:0,
        backgroundColor: 'transparent',
        zIndex:999
    }
};

const mapStateToProps = ({ search, auth }) => {
    const { searchText, search_results } = search;
    console.log('Auth', auth.user);
    return { searchText, user: auth.user.name, search_results };
};

export default connect(mapStateToProps, { searchTextChanged, searchTextClear })(Search);