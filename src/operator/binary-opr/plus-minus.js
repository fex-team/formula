/**
 * 正负操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'PlusMinusOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M8.497,16.178h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48   h6.697V9.625H0.84c-0.408,0-0.84,0-0.84-0.48s0.432-0.48,0.84-0.48h6.697V1.968c0-0.384,0-0.816,0.48-0.816s0.48,0.504,0.48,0.888   v6.625h6.672c0.408,0,0.84,0,0.84,0.48s-0.432,0.48-0.84,0.48H8.497V16.178z",
                shape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Plus-minus" );
            shape.translate( 5, 2 );

            this.addOperatorShape( shape );

        }

    } );

} );
