function correctMethodName() {  
    return "Output Message";
}

try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    /*document.writeln('An error occurred');*/
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>"); 
}

document.writeln(result);

