import cx from 'classnames';
import { FastField, Form, withFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import { Button } from '../button';
import contactFormStyles from './contact-form.module.css';
import styles from './form.module.css';

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

Yup.addMethod(Yup.string, "phone", function() {
  return this.test("phone", "Telefonní číslo musí obsahovat 9 znaků", value =>
    rePhoneNumber.test(value)
  )
})

// import MaskedInput from 'react-text-mask';
export const ContactFormLayout = ({
  isSubmitting,
  values,
  errors,
  touched,
  themeLight,
  btnType = "primary",
  btnText = "Mám zájem",
  label = false,
  horizontal = false,
}) => {
  return (
    <Form
      name="contact"
      method="post"
      className={cx(contactFormStyles.contactForm, {
        [contactFormStyles.horizontal]: horizontal,
        [contactFormStyles.themeLight]: themeLight,
      })}
    >
      <div className={cx(styles.inputField, contactFormStyles.inputField)}>
        {label && <label className={contactFormStyles.label}>Telefon</label>}
        {/* <FastField name="phone">
          {({ field }) => (
            <MaskedInput
              {...field}
              mask={[
                "+",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
              ]}
              placeholder="Enter your phone number"
              type="text"
              className={cx(styles.input, contactFormStyles.input)}
            />
          )}
        </FastField> */}
        <FastField
          component="input"
          type="tel"
          name="phone"
          className={cx(styles.input, contactFormStyles.input)}
        />
        {touched.phone && errors.phone && (
          <span className={cx(styles.error, contactFormStyles.error)}>
            {errors.phone}
          </span>
        )}
      </div>
      {/* {values.success && (
        <div className={styles.success}>
          <h4 className="text-center">Successfully sent!</h4>
        </div>
      )} */}
      <Button
        name="submit"
        type={btnType}
        buttonType="submit"
        disabled={isSubmitting}
        className={contactFormStyles.contactFormButton}
      >
        {btnText}
      </Button>
    </Form>
  )
}

export const ContactForm2 = withFormik({
  mapPropsToValues: () => ({
    phone: "+420",
    success: false,
  }),
  validationSchema: () =>
    Yup.object().shape({
      phone: Yup.string()
        .min(9)
        .phone(),
    }),
  handleSubmit: async (
    { phone },
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      // const encode = data => {
      //   return Object.keys(data)
      //     .map(
      //       key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      //     )
      //     .join("&")
      // }
      const data = {
        form_name: "contact2",
        phone,
      }
      await fetch("/api/application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      await setSubmitting(false)
      await setFieldValue("success", true)
      setTimeout(() => {
        window.location.href = "/thank-you"
        window.dataLayer.push({
          event: "ga.pageview",
          pageURL: "/thank-you-contact2",
          pageType: "Purchase",
        })
        resetForm()
      }, 1000)
    } catch (err) {
      setSubmitting(false)
      setFieldValue("success", false)
      alert("Something went wrong, please try again!")
    }
  },
})(ContactFormLayout)
