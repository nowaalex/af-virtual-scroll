import Table from  "af-virtual-scroll/ComplexTable";
import faker from "faker";

const rows = Array.from({ length: 10000 }, (v, i) => ({
    i,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    country: faker.address.country()
}));

/* Math.random is not the best option, because same rowIndex should produce same height */
const getPureRandomLineHeight = rowIndex => 20 + ( rowIndex % 53 ) + ( rowIndex % 87 );

const SimpleTable = () => (
    <Table
        rowsQuantity={rows.length}
        getRowData={i => rows[ i ]}
        estimatedRowHeight={60}
        columns={[
            {
                dataKey: "i",
                render: ( cellData, rowData, rowIndex ) => (
                    <div style={{
                        color: "#000",
                        textAlign: "center",
                        lineHeight: `${getPureRandomLineHeight(rowIndex)}px`,
                        background: `hsl(${rowIndex*11%360},60%,60%)`
                    }}>
                        {cellData}
                    </div>
                )
            },
            "firstName",
            "lastName",
            "country"
        ]}
    />
);

export default SimpleTable;