"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[173],{4751:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return m},contentTitle:function(){return r},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],m={id:"mui",title:"MUI"},r=void 0,u={unversionedId:"api/mui",id:"api/mui",isDocsHomePage:!1,title:"MUI",description:"The following props are always excluded: name, value, error, and additional ones where it makes sense",source:"@site/docs/api/material-ui.md",sourceDirName:"api",slug:"/api/mui",permalink:"/formik-mui/docs/api/mui",editUrl:"https://github.com/stackworx/formik-mui/edit/main/docs/api/material-ui.md",tags:[],version:"current",frontMatter:{id:"mui",title:"MUI"},sidebar:"someSidebar",previous:{title:"FAQ",permalink:"/formik-mui/docs/guide/faq"},next:{title:"MUI Lab",permalink:"/formik-mui/docs/api/mui-lab"}},p=[{value:"Autocomplete",id:"autocomplete",children:[{value:"Example",id:"example",children:[],level:4},{value:"MUI Autocomplete Documentation",id:"mui-autocomplete-documentation",children:[],level:4}],level:2},{value:"Checkbox",id:"checkbox",children:[{value:"Example",id:"example-1",children:[],level:4},{value:"MUI Checkbox Documentation",id:"mui-checkbox-documentation",children:[],level:4}],level:2},{value:"CheckboxWithLabel",id:"checkboxwithlabel",children:[{value:"Example",id:"example-2",children:[],level:4},{value:"MUI Documentation",id:"mui-documentation",children:[],level:4}],level:2},{value:"InputBase",id:"inputbase",children:[{value:"Example",id:"example-3",children:[],level:4},{value:"MUI InputBase Documentation",id:"mui-inputbase-documentation",children:[],level:4}],level:2},{value:"RadioGroup",id:"radiogroup",children:[{value:"Example",id:"example-4",children:[],level:4},{value:"MUI RadioGroup Documentation",id:"mui-radiogroup-documentation",children:[],level:4}],level:2},{value:"Select",id:"select",children:[{value:"Example",id:"example-5",children:[],level:4},{value:"MUI Select Documentation",id:"mui-select-documentation",children:[],level:4}],level:2},{value:"SimpleFileUpload",id:"simplefileupload",children:[{value:"Example",id:"example-6",children:[],level:4},{value:"API",id:"api",children:[],level:4}],level:2},{value:"Switch",id:"switch",children:[{value:"MUI Switch Documentation",id:"mui-switch-documentation",children:[],level:4}],level:2},{value:"TextField",id:"textfield",children:[{value:"Example",id:"example-7",children:[],level:4},{value:"MUI TextField Documentation",id:"mui-textfield-documentation",children:[],level:4}],level:2},{value:"ToggleButtonGroup",id:"togglebuttongroup",children:[{value:"Example",id:"example-8",children:[],level:4},{value:"MUI ToggleButtonGroup Documentation",id:"mui-togglebuttongroup-documentation",children:[],level:4}],level:2}],d={toc:p};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following props are always excluded: ",(0,a.kt)("inlineCode",{parentName:"p"},"name, value, error"),", and additional ones where it makes sense"),(0,a.kt)("h2",{id:"autocomplete"},"Autocomplete"),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Autocomplete } from 'formik-mui';\n\nconst options = [{ title: 'The Shawshank Redemption', year: 1994 }, ...]\n\n<Field\n  name=\"name\"\n  component={Autocomplete}\n  options={options}\n  getOptionLabel={(option: Movie) => option.title}\n  style={{ width: 300 }}\n  renderInput={(params: AutocompleteRenderInputParams) => (\n    <TextField\n      {...params}\n      // We have to manually set the corresponding fields on the input component\n      name=\"name\"\n      error={touched['name'] && !!errors['name']}\n      helperText={errors['name']}\n      label=\"Autocomplete\"\n      variant=\"outlined\"\n    />\n  )}\n/>;\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note the manual inclusion of the error")),(0,a.kt)("h4",{id:"mui-autocomplete-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/autocomplete/"},"MUI Autocomplete Documentation")),(0,a.kt)("h2",{id:"checkbox"},"Checkbox"),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Checkbox } from \'formik-mui\';\n\n<Field component={Checkbox} type="checkbox" name="checked" />;\n')),(0,a.kt)("h4",{id:"mui-checkbox-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/checkbox/"},"MUI Checkbox Documentation")),(0,a.kt)("h2",{id:"checkboxwithlabel"},"CheckboxWithLabel"),(0,a.kt)("p",null,"A convenience wrapper that adds label to Checkbox using FormControlLabel. Supports all the same properties as Checkbox and accepts an additional ",(0,a.kt)("inlineCode",{parentName:"p"},"Label")," prop, which are props applied to FormControlLabel."),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { CheckboxWithLabel } from 'formik-mui';\n\n<Field\n  component={CheckboxWithLabel}\n  type=\"checkbox\"\n  name=\"checked\"\n  Label={{ label: 'Checkbox' }}\n/>;\n")),(0,a.kt)("h4",{id:"mui-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/form-control-label/"},"MUI Documentation")),(0,a.kt)("h2",{id:"inputbase"},"InputBase"),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { InputBase } from 'formik-mui';\n\n<Field component={InputBase} name=\"inputBase\" />;\n")),(0,a.kt)("h4",{id:"mui-inputbase-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/input-base/"},"MUI InputBase Documentation")),(0,a.kt)("h2",{id:"radiogroup"},"RadioGroup"),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { FormControlLabel, Radio, LinearProgress } from \'@mui/material/core\';\nimport { Formik, Field } from \'formik\';\nimport { RadioGroup } from \'formik-mui\';\n\n<Formik {...otherProps}>\n  {({ isSubmitting }) => (\n    <Field component={RadioGroup} name="activity">\n      <FormControlLabel\n        value="painting"\n        control={<Radio disabled={isSubmitting} />}\n        label="Painting"\n        disabled={isSubmitting}\n      />\n      <FormControlLabel\n        value="drawing"\n        control={<Radio disabled={isSubmitting} />}\n        label="Drawing"\n        disabled={isSubmitting}\n      />\n      <FormControlLabel\n        value="none"\n        control={<Radio disabled={isSubmitting} />}\n        label="None"\n        disabled\n      />\n    </Field>\n  )}\n</Formik>;\n')),(0,a.kt)("h4",{id:"mui-radiogroup-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/radio-group/"},"MUI RadioGroup Documentation")),(0,a.kt)("h2",{id:"select"},"Select"),(0,a.kt)("h4",{id:"example-5"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Field } from 'formik';\nimport MenuItem from '@mui/material/MenuItem';\nimport InputLabel from '@mui/material/InputLabel';\nimport FormControl from '@mui/material/FormControl';\nimport { Select } from 'formik-mui';\n\n<Field\n  component={Select}\n  formControl={{ sx: sxFormControl }}\n  formHelperText={{ children: 'How old are you?' }}\n  id=\"age\"\n  name=\"age\"\n  labelId=\"age-simple\"\n  label=\"Age\"\n  validate={(age: number) =>\n    !age\n      ? 'Please enter your age'\n      : age < 21\n      ? 'You must be 21 or older'\n      : undefined\n  }\n>\n  <MenuItem value={10}>Ten</MenuItem>\n  <MenuItem value={20}>Twenty</MenuItem>\n  <MenuItem value={30}>Thirty</MenuItem>\n</Field>;\n")),(0,a.kt)("h4",{id:"mui-select-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/select/"},"MUI Select Documentation")),(0,a.kt)("h2",{id:"simplefileupload"},"SimpleFileUpload"),(0,a.kt)("h4",{id:"example-6"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { SimpleFileUpload } from \'formik-mui\';\n\n<Field component={SimpleFileUpload} name="file" label="Simple File Upload" />;\n')),(0,a.kt)("h4",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"interface SimpleFileUploadProps {\n  name: string; // Field Name\n  label: string; // Field Label\n  disabled?: boolean;\n  // Customize the Input Component\n  InputProps?: Omit<InputProps, 'name' | 'type' | 'label'>;\n  // Customize the Input Label Component\n  InputLabelProps?: InputLabelProps;\n}\n")),(0,a.kt)("h2",{id:"switch"},"Switch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Switch } from \'formik-mui\';\n\n<Field component={Switch} type="checkbox" name="switch" />;\n')),(0,a.kt)("h4",{id:"mui-switch-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/switch/"},"MUI Switch Documentation")),(0,a.kt)("h2",{id:"textfield"},"TextField"),(0,a.kt)("h4",{id:"example-7"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { TextField } from \'formik-mui\';\n\n<Field\n  component={TextField}\n  label="Outlined"\n  name="outlined"\n  variant="outlined"\n  InputProps={{ notched: true }}\n/>;\n')),(0,a.kt)("h4",{id:"mui-textfield-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/text-field/"},"MUI TextField Documentation")),(0,a.kt)("h2",{id:"togglebuttongroup"},"ToggleButtonGroup"),(0,a.kt)("h4",{id:"example-8"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import FormatAlignCenterIcon from \'@mui/icons-material/FormatAlignCenter\';\nimport FormatAlignJustifyIcon from \'@mui/icons-material/FormatAlignJustify\';\nimport FormatAlignLeftIcon from \'@mui/icons-material/FormatAlignLeft\';\nimport FormatAlignRightIcon from \'@mui/icons-material/FormatAlignRight\';\nimport ToggleButton from \'@mui/material/ToggleButton\';\nimport { ToggleButtonGroup } from \'formik-mui\';\n\n<Field component={ToggleButtonGroup} name="name" type="checkbox">\n  <ToggleButton value="left" aria-label="left aligned">\n    <FormatAlignLeftIcon />\n  </ToggleButton>\n  <ToggleButton value="center" aria-label="centered">\n    <FormatAlignCenterIcon />\n  </ToggleButton>\n  <ToggleButton value="right" aria-label="right aligned">\n    <FormatAlignRightIcon />\n  </ToggleButton>\n  <ToggleButton value="justify" aria-label="justified" disabled>\n    <FormatAlignJustifyIcon />\n  </ToggleButton>\n</Field>;\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note the ",(0,a.kt)("inlineCode",{parentName:"em"},"type=checkbox")," attribute")),(0,a.kt)("h4",{id:"mui-togglebuttongroup-documentation"},(0,a.kt)("a",{parentName:"h4",href:"https://mui.com/api/toggle-button-group/"},"MUI ToggleButtonGroup Documentation")))}c.isMDXComponent=!0}}]);