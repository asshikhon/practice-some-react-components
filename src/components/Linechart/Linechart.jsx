import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const Linechart = () => {

    const studentMarksData = [
        { student: 'Alice', mathMarks: 85, chemistryMarks: 78, physicsMarks: 92 },
        { student: 'Bob', mathMarks: 75, chemistryMarks: 80, physicsMarks: 70 },
        { student: 'Charlie', mathMarks: 90, chemistryMarks: 85, physicsMarks: 88 },
        { student: 'David', mathMarks: 65, chemistryMarks: 70, physicsMarks: 60 },
        { student: 'Eva', mathMarks: 80, chemistryMarks: 75, physicsMarks: 82 },
        { student: 'Frank', mathMarks: 70, chemistryMarks: 68, physicsMarks: 72 },
        { student: 'Grace', mathMarks: 95, chemistryMarks: 90, physicsMarks: 98 },
        { student: 'Hannah', mathMarks: 85, chemistryMarks: 88, physicsMarks: 82 },
        { student: 'Ian', mathMarks: 78, chemistryMarks: 82, physicsMarks: 75 },
        { student: 'Jenny', mathMarks: 88, chemistryMarks: 90, physicsMarks: 85 }
      ];

    return (
        <div>
            <LChart width={500} height={400} data={studentMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
<Line dataKey="mathMarks" stroke='green'></Line>
<Line dataKey="chemistryMarks" stroke='red'></Line>
<Line dataKey="physicsMarks" stroke='yellow'></Line>
            </LChart>
        </div>
    );
};

export default Linechart;