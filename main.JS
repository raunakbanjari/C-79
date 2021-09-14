var list_of_the_student_array=[]
function submit(){
    var student_1= document.getElementById("student_name_1").value
    var student_2= document.getElementById("student_name_2").value
    var student_3= document.getElementById("student_name_3").value
    var student_4= document.getElementById("student_name_4").value
    list_of_the_student_array.push(student_1)
    list_of_the_student_array.push(student_2)
    list_of_the_student_array.push(student_3)
    list_of_the_student_array.push(student_4)
    console.log(list_of_the_student_array)
    document.getElementById("display_list").innerHTML= list_of_the_student_array
    document.getElementById("button_submit").style.display="none"
    document.getElementById("button_sort").style.display="inline-block"


}
function sort(){
    list_of_the_student_array.sort()
    console.log(list_of_the_student_array)
    document.getElementById("display_list").innerHTML= list_of_the_student_array
}
