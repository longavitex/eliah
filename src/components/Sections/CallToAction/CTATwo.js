'use client'

import React, { useState } from "react";
import { useForm } from "react-hook-form";

import SectionTitleOne from "../SectionTitle/SectionTitleOne";

export default function CTATwo() {
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div
      className="cta -style-2"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/cta/CTATwo/1.png)`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12  ">
            <div className="cta__form">
              <h3>
                Don’t Wait Any Longer! <br /> Give 55% Off Now!
              </h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="cta__form__detail"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="input-validator">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        {...register('name', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-validator">
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        {...register('phone', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-validator">
                      <input
                        type="text"
                        placeholder="Your address"
                        name="address"
                        {...register('address', { required: true })}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="input-validator">
                      <select
                        name="produts"
                        className="customed-select"
                        defaultValue=""
                      >
                        <option value="" hidden>
                          Choose products
                        </option>
                        {["Product A", "Product B", "Product C"].map(
                          (item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-validator">
                      <textarea
                        type="text"
                        placeholder="Message"
                        name="message"
                        {...register('message', { required: true })}
                      />
                    </div>
                  </div>
                </div>
                <button className="btn -dark">Send order now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
