import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>FOLDER DATA REPORT</Text>
        <Table data={folders} columns={columns} />
      </View>
    </Page>
  </Document>
);

function Table({ data, columns }) {
  const columnCount = columns.length;
  return (
    <View style={[styles.table, { flexDirection: 'row' }]}>
      {columns.map((column) => (
        <View key={column.key} style={[styles.column, { width: `${100 / columnCount}%` }]}>
          {data.map((item) => (
            <Text key={item[column.key]} style={styles.text}>{item[column.key]}</Text>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  table: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    flex: 1,
  },
  text: {
    marginVertical: 2,
  },
});

export default MyDocument;
