import React from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import { ListComponent, SelectComponent, TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import * as classes from './character.styles';
import { Lookup } from 'common/models';
import { Character } from './character.vm';

interface Props {
  character: Character;
  locations: Lookup[];
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, locations, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {(props) => {
        console.log(props);
        return (
          <Form className={classes.root}>
            <TextFieldComponent name='name' label='Name' />
            <SelectComponent name='location.name' label='Location' items={locations} />
            <TextFieldComponent
              name='species'
              label='Species'
            />
            <TextFieldComponent
              name='gender'
              label='Gender'
            />
            <TextFieldComponent
              name='status'
              label='Status'
            />
            <FieldArray
              name='bestSentences'
              render={arrayHelpers => (
                <ListComponent title='Best sentences' label='Add a new sentence' items={props.values.bestSentences}
                               onRemoveItem={arrayHelpers.remove} onAddItem={arrayHelpers.push} />
              )
              }
            />
            <Button type='submit' variant='contained' color='primary'>
              Save
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
