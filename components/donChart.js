import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Pie, Text as SvgText } from 'react-native-svg';

const data = [
    { value: 50, label: 'Category A', color: '#f00' },
    { value: 30, label: 'Category B', color: '#00f' },
    { value: 20, label: 'Category C', color: '#0f0' },
];

const accessibleColors = {
    normal: {
        'Category A': '#f00',
        'Category B': '#00f',
        'Category C': '#0f0',
    },
};

export default function DonChart() {
    return (
        <View>
            <Text>Accessible Donut Chart Example</Text>
            <Svg width="200" height="200">
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={100}
                    padAngle={0.04}
                    startAngle={-90}
                    endAngle={270}
                    sort={(a, b) => a.value - b.value} // Ensure slices are sorted
                >
                    {(slices) =>
                        slices.map((slice, index) => {
                            const { label, value, color } = slice.data;
                            const fill = accessibleColors.normal[label];

                            return (
                                <SvgText
                                    key={index}
                                    x={slice.centroid[0]}
                                    y={slice.centroid[1]}
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    fill={fill}
                                >
                                    {label}
                                </SvgText>
                            );
                        })
                    }
                </Pie>
            </Svg>
        </View>
    );
}
