import { Component, OnInit } from '@angular/core';
import {
    StringWidget,
    TextAreaWidget,
    SelectWidget,
    RadioWidget,
    CheckboxWidget,
    ButtonWidget,
    ControlWidget,
    ArrayWidget,
} from 'ngx-schema-form';
import { ControlModel } from 'pastanaga-angular';

@Component({
    selector: 'pa-nsf-string-widget',
    templateUrl: './string.widget.html',
})
export class PastanagaStringWidget extends StringWidget {}

@Component({
    selector: 'pa-nsf-textarea-widget',
    templateUrl: './textarea.widget.html',
})
export class PastanagaTextareaWidget extends TextAreaWidget {}

@Component({
    selector: 'pa-nsf-select-widget',
    templateUrl: './select.widget.html',
})
export class PastanagaSelectWidget extends SelectWidget implements OnInit {
    options: {id: string, name: string}[];

    ngOnInit() {
        const options =
            this.schema.type !== 'array'
                ? this.schema.oneOf
                : this.schema.items.oneOf;
        this.options = options.map(option => ({
            id: option.enum[0],
            name: option.description,
        }));
    }
}

@Component({
    selector: 'pa-nsf-radio-widget',
    templateUrl: './radio.widget.html',
})
export class PastanagaRadioWidget extends RadioWidget implements OnInit {
    checkboxes: ControlModel[];

    ngOnInit() {
        this.checkboxes = this.schema.oneOf.map(option => ({
            value: option.enum[0],
            label: option.description,
        }));
    }
}

@Component({
    selector: 'pa-nsf-checkbox-widget',
    templateUrl: './checkbox.widget.html',
})
export class PastanagaCheckboxWidget extends CheckboxWidget implements OnInit {
    checkboxes: ControlModel[];

    ngOnInit() {
        this.checkboxes = this.schema.items.oneOf.map(option => ({
            value: option.enum[0],
            label: option.description,
        }));
    }
}

@Component({
    selector: 'pa-nsf-boolean-widget',
    templateUrl: './boolean.widget.html',
})
export class PastanagaBooleanWidget extends CheckboxWidget {

    setValue($event) {
        this.control.setValue($event);
    }
}

@Component({
  selector: 'pa-nsf-button-widget',
  templateUrl: './button.widget.html',
})
export class PastanagaButtonWidget extends ButtonWidget {}

@Component({
    selector: 'pa-nsf-richtext-widget',
    templateUrl: './richtext.widget.html',
  })
  export class PastanagaRichtextWidget extends ControlWidget {}

  @Component({
    selector: 'pa-nsf-array-widget',
    templateUrl: './array.widget.html',
  })
  export class PastanagaArrayWidget extends ArrayWidget {}
