/**
 * A text  field with a label that reacts to an onFieldChange event.
 *
 * @example
 * field = {
 *  "id": 140,
 *  "attribute_name": "website_url",
 *  "description": null,
 *  "input_type": "text_input",
 *  "label": "Webiste URL",
 *  "placeholder_text": ""
 *}
 *
 * <TextInput
   key={field.id}
   field={field}
   onFieldChange={this.handleFieldChange} />

 * Note:
 * field is an json object that will contain the following attributes: attribute_name, placeholder_text, description, label.
 */

import { h } from 'preact';
import PropTypes from 'prop-types';
import { FormField } from '@crayons';

function TextInput(props) {
  const { onFieldChange } = props;
  const { attribute_name, placeholder_text, description, label } = props.field;

  return (
    <FormField>
      <label class="crayons-field__label" htmlFor={attribute_name}>
        {label}
      </label>
      <input
        class="crayons-textfield"
        placeholder={placeholder_text}
        name={attribute_name}
        id={attribute_name}
        onChange={onFieldChange}
      />
      {description && <p class="crayons-field__description">{description}</p>}
    </FormField>
  );
}

TextInput.propTypes = {
  field: PropTypes.shape({
    attribute_name: PropTypes.string.isRequired,
    placeholder_text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    input_type: PropTypes.string.isRequired,
  }).isRequired,
};

export default TextInput;
