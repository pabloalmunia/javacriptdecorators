const {runParse, runTranspiler, runTest} = require ('./lib/run.js');

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
run ('061 - static method - context');
run ('062 - static method - replace');
run ('063 - static method - multiple');
run ('064 - static method - setMetadata');
run ('065 - static method - getMetadata');
run ('066 - static method - addInitializer');
run ('067 - static method - addInitializer & replace');
run ('068 - static method - multiple addInitializer');

// Static getter
run ('071 - static getter - context');
run ('072 - static getter - replace');
run ('073 - static getter - multiple');
run ('074 - static getter - setMetadata');
run ('075 - static getter - getMetadata');
run ('076 - static getter - addInitializer');
run ('077 - static getter - addInitializer & replace');
run ('078 - static getter - multiple addInitializer');

// Static setter
run ('081 - static setter - context');
run ('082 - static setter - replace');
run ('083 - static setter - multiple');
run ('084 - static setter - setMetadata');
run ('085 - static setter - getMetadata');
run ('086 - static setter - addInitializer');
run ('087 - static setter - addInitializer & replace');
run ('088 - static setter - multiple addInitializer');

// Static field
run ('091 - static field - context');
run ('092 - static field - initial value');
run ('093 - static field - multiple');
run ('094 - static field - setMetadata');
run ('095 - static field - getMetadata');
run ('096 - static field - addInitializer');
run ('097 - static field - addInitializer & initial value');
run ('098 - static field - multiple addInitializer');

// Static field accessor
run ('101 - static field accessor - context');
run ('102 - static field accessor - initial value');
run ('103 - static field accessor - multiple');
run ('104 - static field accessor - setMetadata');
run ('105 - static field accessor - getMetadata');
run ('106 - static field accessor - addInitializer');
run ('107 - static field accessor - addInitializer & replace');
run ('108 - static field - multiple addInitializer');

// Private method
run ('111 - private method - context');
run ('112 - private method - replace');
run ('113 - private method - multiple');
run ('114 - private method - setMetadata');
run ('115 - private method - getMetadata');
run ('116 - private method - addInitializer');
run ('117 - private method - addInitializer & replace');
run ('118 - private method - multiple addInitializer');

// Private getter
run ('121 - private getter - context');
run ('122 - private getter - replace');
run ('123 - private getter - multiple');
run ('124 - private getter - setMetadata');
run ('125 - private getter - getMetadata');
run ('126 - private getter - addInitializer');
run ('127 - private getter - addInitializer & replace');
run ('128 - private getter - multiple addInitializer');

// Private setter
run ('131 - private setter - context');
run ('132 - private setter - replace');
run ('133 - private setter - multiple');
run ('134 - private setter - setMetadata');
run ('135 - private setter - getMetadata');
run ('136 - private setter - addInitializer');
run ('137 - private setter - addInitializer & replace');
run ('138 - private setter - multiple addInitializer');

// Private field
run ('141 - private field - context');
run ('142 - private field - initial value');
run ('143 - private field - multiple');
run ('144 - private field - setMetadata');
run ('145 - private field - getMetadata');
run ('146 - private field - addInitializer');
run ('147 - private field - addInitializer & initial value');
run ('148 - private field - multiple addInitializer');

// Private field accessor
run ('151 - private field accessor - context');
run ('152 - private field accessor - initial value');
run ('153 - private field accessor - multiple');
run ('154 - private field accessor - setMetadata');
run ('155 - private field accessor - getMetadata');
run ('156 - private field accessor - addInitializer');
run ('157 - private field accessor - addInitializer & initial value');
run ('158 - private field - multiple addInitializer');

// Static private method
run ('161 - static private method - context');
run ('162 - static private method - replace');
run ('163 - static private method - multiple');
run ('164 - static private method - setMetadata');
run ('165 - static private method - getMetadata');
run ('166 - static private method - addInitializer');
run ('167 - static private method - addInitializer & replace');
run ('168 - static private method - multiple addInitializer');

// Static private getter
run ('171 - static private getter - context');
run ('172 - static private getter - replace');
run ('173 - static private getter - multiple');
run ('174 - static private getter - setMetadata');
run ('175 - static private getter - getMetadata');
run ('176 - static private getter - addInitializer');
run ('177 - static private getter - addInitializer & replace');
run ('178 - static private getter - multiple addInitializer');

// Static private setter
run ('181 - static private setter - context');
run ('182 - static private setter - replace');
run ('183 - static private setter - multiple');
run ('184 - static private setter - setMetadata');
run ('185 - static private setter - getMetadata');
run ('186 - static private setter - addInitializer');
run ('187 - static private setter - addInitializer & replace');
run ('188 - static private setter - multiple addInitializer');

// Static private field
run ('191 - static private field - context');
run ('192 - static private field - initial value');
run ('193 - static private field - multiple');
run ('194 - static private field - setMetadata');
run ('195 - static private field - getMetadata');
run ('196 - static private field - addInitializer');
run ('197 - static private field - addInitializer & initial value');
run ('198 - static private field - multiple addInitializer');

// Static private field accessor
run ('201 - static private field accessor - context');
run ('202 - static private field accessor - initial value');
run ('203 - static private field accessor - multiple');
run ('204 - static private field accessor - setMetadata');
run ('205 - static private field accessor - getMetadata');
run ('206 - static private field accessor - addInitializer');
run ('207 - static private field accessor - addInitializer & replace');
run ('208 - static private field - multiple addInitializer');

// Symbols
run ('211 - public member decorator with symbols');
run ('212 - static decorator with symbols');