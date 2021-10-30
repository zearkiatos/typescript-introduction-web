import Field from "./Field";

function RequiredFieldDecorator(field: Field): Field {
    let validate = field.validate;
    field.validate = function () {
        validate();
        let value = field.input.value;

        if(!value) {
            field.errors.push('Required');
        }
    };
    return field;
}

function EmailFieldDecorator(field: Field): Field {
    let validate = field.validate;
    field.validate = function () {
        validate();
        let value = field.input.value;
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(value.toLowerCase())) {
            field.errors.push('Should be an email');
        }
    };
    return field;
}

let field = new Field(document.querySelector('#email'));
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);

