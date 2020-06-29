
import React from 'react';

import { VictoryChart, VictoryTheme, VictoryLine } from 'victory'


const Chart = () => {
    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
            >
                <VictoryLine
                    interpolation="natural"
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" }
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                    labels={({ datum }) => `x: ${datum.x} | y: ${datum.y}`}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}

                />
            </VictoryChart>
        </div>
    )
}

export default Chart;