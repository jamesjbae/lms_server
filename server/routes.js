const lectureController = require("./controller")
const path = require('path');

module.exports = function(app) {

    app.get('/api/lectures', lectureController.getAllLectures);
    app.get('/api/lectures/:id', lectureController.getOneLecture);
    app.post('/api/lectures', lectureController.newLecture);
    app.put('/api/lectures/:id', lectureController.editLecture);
    app.delete('/api/lectures/:id', lectureController.deleteLecture);
    app.get('/api/lectures/student/:lectureid', lectureController.getAllStudents);
    app.get('/api/lectures/:lectureid/student/studentid', lectureController.getOneStudent);
    app.post('/api/lectures/student/:lectureid', lectureController.newStudent);
    app.put('/api/lectures/:lectureid/student/:studentid', lectureController.editStudent);
    app.delete('/api/lectures/:lectureid/student/:studentid', lectureController.deleteStudent);
    app.get('/api/lectures/instructor/:lectureid', lectureController.getAllInstructors);
    app.get('/api/lectures/:lectureid/instructor/instructorid', lectureController.getOneInstructor);
    app.post('/api/lectures/instructor/:lectureid', lectureController.newInstructor);
    app.put('/api/lectures/:lectureid/instructor/:instructorid', lectureController.editInstructor);
    app.delete('/api/lectures/:lectureid/instructor/:instructorid', lectureController.deleteInstructor);
    app.post('/api/lectures/comment/:lectureid', lectureController.newComment);
    app.delete('/api/lectures/:lectureid/comment/:commentid', lectureController.deleteComment);
    app.all('*', function(req, res, next) {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}