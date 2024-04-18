// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';

// const Home = () => {

   

//   return (
//     <div>
//         <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//     </div>
//   )
// }

// export default Home

// const firebaseConfig = {
//   apiKey: "AIzaSyAZ6lGynphioMsozlDNtB_WxEv21T2TomU",
//   authDomain: "faceattendancesystem-64e2c.firebaseapp.com",
//   databaseURL: "https://faceattendancesystem-64e2c-default-rtdb.firebaseio.com",
//   projectId: "faceattendancesystem-64e2c",
//   storageBucket: "faceattendancesystem-64e2c.appspot.com",
//   messagingSenderId: "133860523517",
//   appId: "1:133860523517:web:a65637261c0e1c1863ad94",
//   measurementId: "G-MNYED7NWPJ"
// };
import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ6lGynphioMsozlDNtB_WxEv21T2TomU",
  authDomain: "faceattendancesystem-64e2c.firebaseapp.com",
  databaseURL: "https://faceattendancesystem-64e2c-default-rtdb.firebaseio.com",
  projectId: "faceattendancesystem-64e2c",
  storageBucket: "faceattendancesystem-64e2c.appspot.com",
  messagingSenderId: "133860523517",
  appId: "1:133860523517:web:a65637261c0e1c1863ad94",
  measurementId: "G-MNYED7NWPJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Home = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref('Students');
      dbRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const studentsArray = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].name,
            major: data[key].major,
            attendance: data[key].attendance, // Assuming you have a field for attendance in your database
            lastAttendanceTime: data[key].last_attendance_time,
            startingYear: data[key].starting_year,
            year: data[key].year,
            imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/images%2F${encodeURIComponent(key)}?alt=media` // Use student ID as image filename
          }));
          setStudents(studentsArray);
        } else {
          setStudents([]);
        }
      });

      // Cleanup function to unsubscribe from Firebase listeners
      return () => dbRef.off('value');
    };

    fetchData();
  }, []);

  return (
    <div>
      {students.map((student) => (
        <Card key={student.id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={student.imageUrl}
              alt={student.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {student.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Major: {student.major}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Attendance: {student.attendance}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Last Attendance Time: {student.lastAttendanceTime}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Starting Year: {student.startingYear}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year: {student.year}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default Home;

