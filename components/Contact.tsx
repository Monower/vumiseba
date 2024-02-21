import React, { useEffect, useState } from "react";
import FormInput from "@/components/form/FormInput";
import FormTextarea from "@/components/form/FormTextarea";
import Submit from "@/components/form/Submit";
import { useLang } from "@/hooks";
import ContactProps from "@/models/Contact";
import { validate, number_check } from "@/utils/helper";
import { userQuestionSubmit } from "../http";
import { toast } from "react-toastify";
import { num_en_to_bn } from "@/helper/helper";
import { num_bn_to_en } from "@/utils/helper";
import { number_check2 } from "@/helper/helper";
import Loader from "@/components/skeleton/Loader/Loader";

const Contact = () => {
  const { LangInfo } = useLang();
  const { lang } = LangInfo;
  const [loading, setLoading] = useState(false);

  const [contacInfo, setcontacInfo] = useState<ContactProps>({
    name: "",
    phone: "",
    email: "",
    question: "",
  });

  const [formErrors, setFormErrors] = useState<ContactProps>(
    {} as ContactProps
  );

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setcontacInfo({ ...contacInfo, [name]: value });
  };

  const HandleChange2 = (e) => {
    const { value, name } = e.target;
    setcontacInfo({ ...contacInfo, [name]: num_en_to_bn(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let validation = validate(contacInfo);
    setFormErrors(validate(contacInfo));

    if (number_check(num_bn_to_en(contacInfo?.phone))) {
      if (validation["name"] == "" && validation["phone"] == "") {
        const { data } = await userQuestionSubmit(contacInfo);

        if (data?.status_code === 200) {
          setcontacInfo({
            name: "",
            phone: "",
            email: "",
            question: "",
          });

          toast.success("আপনার প্রশ্নটি সফলভাবে জমা হয়েছে।");
        }
      }

      setTimeout(() => {
        setLoading(false);
      }, 6000);

      
    } else {
      toast.error("মোবাইল নম্বর সঠিক নয়।");
      setcontacInfo({
        name: "",
        phone: "",
        email: "",
        question: "",
      });
      setTimeout(() => {
        setLoading(false);
      }, 6000);
    }
  };

  const phoneNumber = (event) => {
    const { value, name } = event.target;

    if (!value) {
      setcontacInfo((pre) => ({
        ...pre,
        [name]: "",
      }));
    }
    let validNumber = number_check2(value);
    if (validNumber && value?.length < 12) {
      setcontacInfo((pre) => ({
        ...pre,
        [name]: validNumber,
      }));
    }
  };

  return (
    <div className="border border-green1 rounded-md mt-3 py-4 px-4 mx-auto max-w-screen-md bg-white w-full lg:w-[80%]">
      <form onSubmit={handleSubmit} className="space-y-3 text-center">
        <div className="">
          <FormInput
            value={contacInfo.name}
            type={"text"}
            onChange={handleChange}
            label={lang === "eng" ? "Your Name" : "নাম "}
            placeholder={lang === "eng" ? "Your Name" : "আপনার নাম "}
            name="name"
            minL={2}
            maxL={50}
          />
          <p className="w-full text-right text-[red] text-[13px]">
            {formErrors.name}
          </p>
        </div>

        <div className="">
          {/*           <FormInput
            value={contacInfo.phone}
            type={"number"}
            onChange={handleChange}
            label={lang === "eng" ? "Your Phone Number" : "মোবাইল নম্বর "}
            placeholder={
              lang === "eng" ? "Your Phone Number" : "আপনার ফোন নম্বর"
            }
            name="phone"
            minL={11}
            maxL={11}

          /> */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <label
              htmlFor="phone"
              className="text-14 lg:text-20 lg:w-[30%] text-left after:content-['_*'] after:text-red-600"
            >
              মোবাইল নম্বর
            </label>
            <div className="flex items-center w-full">
              <span className="inline-flex items-center px-3 py-2 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                +88
              </span>
              <input
                id="phone"
                type="text"
                name="phone"
                value={contacInfo.phone}
                onChange={(event) => phoneNumber(event)}
                placeholder="আপনার ফোন নম্বর"
                maxLength={11}
                minLength={11}
                className="shadow-sm bg-gray-50 border border-l-0 border-gray-300 text-gray-900 text-sm rounded-r-md w-full"
              />
            </div>
          </div>

          <p className="w-full text-right text-[red] text-[13px]">
            {formErrors.phone}
          </p>
        </div>

        <div className="">
          {/*           <FormInput
            value={contacInfo.email}
            type={"email"}
            onChange={handleChange}
            label={lang === "eng" ? "Your Email" : "ইমেইল"}
            placeholder={
              lang === "eng" ? "Your Email" : "আপনার ইমেইল"
            }
            name="email"
            minL={1}
            maxL={50}

          /> */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
            <label
              htmlFor="email"
              className="text-14 lg:text-20 lg:w-[30%] text-left"
            >
              ইমেইল
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={contacInfo.email}
              onChange={handleChange}
              placeholder="আপনার ইমেইল"
              maxLength={50}
              minLength={1}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded w-full"
            />
          </div>

          {/*           <p className="w-full text-right text-[red] text-[13px]">
            {formErrors.email}
          </p> */}
        </div>

        <div className="">
          <FormTextarea
            value={contacInfo.question}
            onChange={handleChange}
            label={lang === "eng" ? "Your Question" : "জিজ্ঞাসা"}
            placeholder={lang === "eng" ? "Your Question" : "আপনার জিজ্ঞাসা"}
            name="question"
          />

          {/*           <p className="w-full text-right text-[red] text-[13px]">
            {formErrors.question}
            প্রেরণ করুন
          </p> */}
        </div>

        <div className="text-center mt-2">
          <button 
            disabled={loading}
            type="submit"
            className={`px-4 py-1 rounded border border-green1 hover:bg-white hover:text-green1 hover:shadow-sm hover:shadow-[#017F28] ${loading ? 'bg-white text-green1 cursor-not-allowed' : 'bg-green1 text-slate-50'}`}>
            {loading ? <Loader /> : "প্রেরণ করুন"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
