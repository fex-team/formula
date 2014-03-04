/**
 * 大于操作符
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" );

    return kity.createClass( 'GtOperator', {

        base: require( "operator/binary-opr/left-right" ),

        constructor: function () {

            var pathData = "M0.864,17.642c-0.336,0.144-0.36,0.168-0.408,0.168C0.168,17.81,0,17.57,0,17.378c0-0.144,0-0.312,0.48-0.528l12.361-5.712   L0.504,5.449C0.192,5.305,0,5.208,0,4.92c0-0.192,0.168-0.432,0.456-0.432c0.048,0,0.096,0.024,0.408,0.168l12.985,5.977   c0.432,0.192,0.48,0.36,0.48,0.504c0,0.168-0.024,0.312-0.48,0.528L0.864,17.642z",
                opShape = new kity.Path( pathData ).fill( "black" );

            this.callBase( "Gt" );

            opShape.translate( 6, 2 );

            // 绘制符号图形
            this.addOperatorShape( opShape );

        }

    } );

} );
