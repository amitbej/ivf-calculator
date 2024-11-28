"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Slider from "@/components/Slider";
import CheckboxGroup from "@/components/CheckboxGroup";
import { calculateIVFSuccessRate } from "@/utils/calculateIVFSuccessRate";
import Link from "next/link";
import { ArrowBigLeft, ArrowLeft } from "lucide-react";
import RadioButtonTwo from "@/components/RadioButtonTwo";
import RadioButtonOne from "@/components/RadioButtonOne";

export default function InputPage() {
  const router = useRouter();
  const [age, setAge] = useState("30-34");
  const [ivfCycles, setIVFCycles] = useState(3);
  const [hasUndergoningProcedures, setHasUndergoningProcedures] =
    useState(false);
  const [hasDonePGTTesting, sethasDonePGTTesting] = useState(true);

  const [medicalConditions, setMedicalConditions] = useState([]);

  const handleSubmit = () => {
    const successRate = calculateIVFSuccessRate(
      age,
      ivfCycles,
      hasUndergoningProcedures,
      medicalConditions
    );
    router.push(`/result?successRate=${successRate}`);
  };

  const ageGroups = [
    "Under 30",
    "Between 30 - 34",
    "Between 35 - 37",
    "Between 38 - 40",
    "Between 41 - 43",
    "Above 43",
  ];

  return (
    <div className="bg-[#FCFAF5]">
      <div className=" hidden md:flex items-start pl-28 p-4 space-x-2">
        <Link href="/" className="text-gray-700 text-xl font-medium capitalize">
          {" "}
          Home{" "}
        </Link>
        <span className="text-gray-700 text-xl font-medium capitalize">/</span>
        <Link
          href="/input"
          className="text-gray-700 font-bold text-xl capitalize hover:text-orange-500"
        >
          {" "}
          IVF-Score{" "}
        </Link>
      </div>
      <div className="flex pl-6 pt-6 md:hidden">
        <ArrowLeft/>
        <Link href="/" className="font-semibold"> IVF Success Rate Calculator</Link>
      </div>
      <div className="  flex flex-col md:items-center  pt-6 h-screen px-2 md:px-4">
        <div className="font-semibold text-xl">
          {" "}
          What age range applies to you?{" "}
        </div>
        <RadioButtonTwo
          options={ageGroups}
          selected={age}
          onChange={(value) => setAge(value)}
        />
        <div className="font-semibold text-xl"> Number of IVF Cycles? </div>
        <Slider
          value={ivfCycles}
          onChange={(value) => setIVFCycles(value)}
          min={1}
          max={5}
        />
        <div className="font-semibold text-xl pt-6">
          Have you undergone these procedures before?{" "}
        </div>
        <div className="flex flex-col md:flex-row items-start justify-around pt-4 pb-6">
          <div>
            <RadioButtonOne
              label="ICSI Procedure :"
              options={["Yes", "No"]}
              selected={hasUndergoningProcedures ? "Yes" : "No"}
              onChange={(value) => setHasUndergoningProcedures(value === "Yes")}
            />
          </div>
          <div className="md:pl-6">
            <RadioButtonOne
              label="PGT Testing :"
              options={["Yes", "No"]}
              selected={hasDonePGTTesting ? "Yes" : "No"}
              onChange={(value) => sethasDonePGTTesting(value === "Yes")}
            />
          </div>
        </div>
        <div className="font-semibold text-xl">
          Do you have any of these medical conditions?
        </div>
        <div className="mb-8">
          <CheckboxGroup
            options={[
              "PCOS",
              "Endometriosis",
              "Low Ovarian Reserve",
              "Male Factor Infertility",
            ]}
            selected={medicalConditions}
            onChange={setMedicalConditions}
          />
        </div>
        <button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Calculate
        </button>
      </div>{" "}
    </div>
  );
}
