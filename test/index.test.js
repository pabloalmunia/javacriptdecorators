const {runParse, runTranspiler, runTest} = require('./lib/run.js');

function run (testFile) {
  test (testFile, () => {
    runParse (testFile);
    runTranspiler (testFile);
    runTest (testFile);
  });
}

// Without decorators
run ('000 - class without decorators');

// Class
run ('001 - class decorator - context');
run ('002 - class decorator - replace');
run ('003 - class decorator - multiple');
run ('004 - class decorator - setMetadata');
run ('005 - class decorator - getMetadata');
run ('006 - class decorator - addInitializer');
run ('007 - class decorator - addInitializer & replace');
run ('008 - class decorator - multiple addInitializer');
run ('009 - class decorator - function');

// Method
run ('011 - public method - context');
run ('012 - public method - replace');
run ('013 - public method - multiple');
run ('014 - public method - setMetadata');
run ('015 - public method - getMetadata');
run ('016 - public method - addInitializer');
run ('017 - public method - addInitializer & replace');
run ('018 - public method - multiple addInitializer');

// Getter
run ('021 - public getter - context');
run ('022 - public getter - replace');
run ('023 - public getter - multiple');
run ('024 - public getter - setMetadata');
run ('025 - public getter - getMetadata');
run ('026 - public getter - addInitializer');
run ('027 - public getter - addInitializer & replace');
run ('028 - public getter - multiple addInitializer');

// Setter
run ('031 - public setter - context');
run ('032 - public setter - replace');
run ('033 - public setter - multiple');
run ('034 - public setter - setMetadata');
run ('035 - public setter - getMetadata');
run ('036 - public setter - addInitializer');
run ('037 - public setter - addInitializer & replace');
run ('038 - public setter - multiple addInitializer');

// Field
run ('041 - public field - context');
run ('042 - public field - initial value');
run ('043 - public field - multiple');
run ('044 - public field - setMetadata');
run ('045 - public field - getMetadata');
run ('046 - public field - addInitializer');
run ('047 - public field - addInitializer & initial value');
run ('048 - public field - multiple addInitializer');

// Field accessor
run ('051 - public field accessor - context');
run ('052 - public field accessor - initial value');
run ('053 - public field accessor - multiple');
run ('054 - public field accessor - setMetadata');
run ('055 - public field accessor - getMetadata');
run ('056 - public field accessor - addInitializer');
run ('057 - public field accessor - addInitializer & initial value');
run ('058 - public field - multiple addInitializer');

// Static method
run( "061 - static method - context" );
run( "062 - static method - replace" );
run( "063 - static method - multiple" );
run( "064 - static method - setMetadata" );
run( "065 - static method - getMetadata" );
run( "066 - static method - addInitializer" );
run( "067 - static method - addInitializer & replace" );
run( "068 - static method - multiple addInitializer" );

// Static getter
run( "071 - static getter - context" );
run( "072 - static getter - replace" );
run( "073 - static getter - multiple" );
run( "074 - static getter - setMetadata" );
run( "075 - static getter - getMetadata" );
run( "076 - static getter - addInitializer" );
run( "077 - static getter - addInitializer & replace" );
run( "078 - static getter - multiple addInitializer" );

// Static setter
run( "081 - static setter - context" );
run( "082 - static setter - replace" );
run( "083 - static setter - multiple" );
run( "084 - static setter - setMetadata" );
run( "085 - static setter - getMetadata" );
run( "086 - static setter - addInitializer" );
run( "087 - static setter - addInitializer & replace" );
run( "088 - static setter - multiple addInitializer" );

// Static field
run( "091 - static field - context" );
run( "092 - static field - initial value" );
run( "093 - static field - multiple" );
run( "094 - static field - setMetadata" );
run( "095 - static field - getMetadata" );
run( "096 - static field - addInitializer" );
run( "097 - static field - addInitializer & initial value" );
run( "098 - static field - multiple addInitializer" );

// Static field accessor
run( "101 - static field accessor - context" );
run( "102 - static field accessor - initial value" );
run( "103 - static field accessor - multiple" );
run( "104 - static field accessor - setMetadata" );
run( "105 - static field accessor - getMetadata" );
run( "106 - static field accessor - addInitializer" );
run( "107 - static field accessor - addInitializer & replace" );
run( "108 - static field - multiple addInitializer" );


// // Private Method
// run ('case091');
// run ('case092');
// run ('case093');
// run ('case094');
// run ('case095');
// run ('case096');
// run ('case097');
// run ('case098');

// // Private Getter
// run ('case101');
// run ('case102');
// run ('case103');
// run ('case104');
// run ('case105');
// run ('case106');
// run ('case107');
// run ('case108');
//
// // Private Setter
// run ('case111');
// run ('case112');
// run ('case113');
// run ('case114');
// run ('case115');
// run ('case116');
// run ('case117');
// run ('case118');
//
// // Private Field
// run ('case121');
// run ('case122');
// run ('case123');
// run ('case124');
// run ('case125');
// run ('case126');
// run ('case127');
// run ('case128');
// run ('case129');
//
// // Static Private Method
// run ('case131');
// run ('case132');
// run ('case133');
// run ('case134');
// run ('case135');
// run ('case136');
// run ('case137');
//
// // Static Private Getter
// run ('case141');
// run ('case142');
// run ('case143');
// run ('case144');
// run ('case145');
// run ('case146');
//
// // Static Private Setter
// run ('case151');
// run ('case152');
// run ('case153');
// run ('case154');
// run ('case155');
// run ('case156');
//
// // Static Private Field
// run ('case161');
// run ('case162');
// run ('case163');
// run ('case164');
// run ('case165');
// run ('case166');
// run ('case167');
// run ('case168');
// run ('case169');
// run ('case169b');
//
// // Symbols
// run ('case170');
// run ('case171');
// run ('case172');
// run ('case173');
// run ('case174');
// run ('case175');
// run ('case176');
// run ('case177');
// run ('case178');
// run ('case179');
// run ('case180');
// run ('case181');
//
// // Metadata and inheritance
// run('case191');
// run('case192');

// // Other examples
// run ('example01');