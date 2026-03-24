"use client";

import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Info, Calculator, AlertTriangle } from "lucide-react";

interface eGFRResult {
	creatinine: number;
	creatinineCystatin: number;
	cystatin: number;
}

interface CKDResult {
	gfrCategory: string;
	acrCategory: string;
	ckdClassification: string;
	riskOfProgression: string;
	monitoringFrequency: string;
	nephrologistReferral: string;
}

export default function EGFRCalculator() {
	const [age, setAge] = useState<string>("");
	const [sex, setSex] = useState<string>("");
	const [creatinine, setCreatinine] = useState<string>("");
	const [cystatin, setCystatin] = useState<string>("");
	const [standardizedAssays, setStandardizedAssays] = useState<string>("Yes");
	const [adjustBSA, setAdjustBSA] = useState<string>("No");
	const [height, setHeight] = useState<string>("");
	const [weight, setWeight] = useState<string>("");
	const [heightUnit, setHeightUnit] = useState<string>("Inches");
	const [weightUnit, setWeightUnit] = useState<string>("Pounds");
	const [acr, setAcr] = useState<string>("");
	const [results, setResults] = useState<eGFRResult | null>(null);
	const [ckdResults, setCkdResults] = useState<CKDResult | null>(null);

	const calculateeGFR = () => {
		if (!age || !sex || !creatinine || !standardizedAssays) return;

		const ageNum = parseFloat(age);
		const creatinineNum = parseFloat(creatinine);
		const cystatinNum = cystatin ? parseFloat(cystatin) : null;

		// CKD-EPI Creatinine Equation (2021)
		let gfrCreatinine = 0;
		if (sex === "Female") {
			if (creatinineNum <= 0.7) {
				gfrCreatinine =
					142 *
					Math.pow(creatinineNum / 0.7, -0.241) *
					Math.pow(0.993, ageNum);
			} else {
				gfrCreatinine =
					142 *
					Math.pow(creatinineNum / 0.7, -1.2) *
					Math.pow(0.993, ageNum);
			}
		} else {
			if (creatinineNum <= 0.9) {
				gfrCreatinine =
					142 *
					Math.pow(creatinineNum / 0.9, -0.302) *
					Math.pow(0.993, ageNum);
			} else {
				gfrCreatinine =
					142 *
					Math.pow(creatinineNum / 0.9, -1.2) *
					Math.pow(0.993, ageNum);
			}
		}

		// CKD-EPI Creatinine-Cystatin Equation (2021)
		let gfrCreatinineCystatin = 0;
		if (cystatinNum) {
			if (sex === "Female") {
				if (creatinineNum <= 0.7 && cystatinNum <= 0.8) {
					gfrCreatinineCystatin =
						135 *
						Math.pow(creatinineNum / 0.7, -0.207) *
						Math.pow(cystatinNum / 0.8, -0.375) *
						Math.pow(0.993, ageNum);
				} else if (creatinineNum <= 0.7 && cystatinNum > 0.8) {
					gfrCreatinineCystatin =
						135 *
						Math.pow(creatinineNum / 0.7, -0.207) *
						Math.pow(cystatinNum / 0.8, -0.711) *
						Math.pow(0.993, ageNum);
				} else if (creatinineNum > 0.7 && cystatinNum <= 0.8) {
					gfrCreatinineCystatin =
						135 *
						Math.pow(creatinineNum / 0.7, -0.601) *
						Math.pow(cystatinNum / 0.8, -0.375) *
						Math.pow(0.993, ageNum);
				} else {
					gfrCreatinineCystatin =
						135 *
						Math.pow(creatinineNum / 0.7, -0.601) *
						Math.pow(cystatinNum / 0.8, -0.711) *
						Math.pow(0.993, ageNum);
				}
			} else {
				if (creatinineNum <= 0.9 && cystatinNum <= 0.8) {
					gfrCreatinineCystatin =
						133 *
						Math.pow(creatinineNum / 0.9, -0.207) *
						Math.pow(cystatinNum / 0.8, -0.375) *
						Math.pow(0.993, ageNum);
				} else if (creatinineNum <= 0.9 && cystatinNum > 0.8) {
					gfrCreatinineCystatin =
						133 *
						Math.pow(creatinineNum / 0.9, -0.207) *
						Math.pow(cystatinNum / 0.8, -0.711) *
						Math.pow(0.993, ageNum);
				} else if (creatinineNum > 0.9 && cystatinNum <= 0.8) {
					gfrCreatinineCystatin =
						133 *
						Math.pow(creatinineNum / 0.9, -0.601) *
						Math.pow(cystatinNum / 0.8, -0.375) *
						Math.pow(0.993, ageNum);
				} else {
					gfrCreatinineCystatin =
						133 *
						Math.pow(creatinineNum / 0.9, -0.601) *
						Math.pow(cystatinNum / 0.8, -0.711) *
						Math.pow(0.993, ageNum);
				}
			}
		}

		// CKD-EPI Cystatin C Equation (2012)
		let gfrCystatin = 0;
		if (cystatinNum) {
			if (sex === "Female") {
				if (cystatinNum <= 0.8) {
					gfrCystatin =
						133 *
						Math.pow(cystatinNum / 0.8, -0.494) *
						Math.pow(0.993, ageNum);
				} else {
					gfrCystatin =
						133 *
						Math.pow(cystatinNum / 0.8, -0.932) *
						Math.pow(0.993, ageNum);
				}
			} else {
				if (cystatinNum <= 0.8) {
					gfrCystatin =
						133 *
						Math.pow(cystatinNum / 0.8, -0.494) *
						Math.pow(0.993, ageNum);
				} else {
					gfrCystatin =
						133 *
						Math.pow(cystatinNum / 0.8, -0.932) *
						Math.pow(0.993, ageNum);
				}
			}
		}

		// Apply BSA adjustment if requested
		if (adjustBSA === "Yes" && height && weight) {
			const heightCm =
				heightUnit === "Inches"
					? parseFloat(height) * 2.54
					: parseFloat(height);
			const weightKg =
				weightUnit === "Pounds"
					? parseFloat(weight) * 0.453592
					: parseFloat(weight);
			const bsa = Math.sqrt((heightCm * weightKg) / 3600);
			const bsaRatio = bsa / 1.73;

			gfrCreatinine = gfrCreatinine * bsaRatio;
			if (gfrCreatinineCystatin > 0)
				gfrCreatinineCystatin = gfrCreatinineCystatin * bsaRatio;
			if (gfrCystatin > 0) gfrCystatin = gfrCystatin * bsaRatio;
		}

		setResults({
			creatinine: Math.round(gfrCreatinine * 100) / 100,
			creatinineCystatin: Math.round(gfrCreatinineCystatin * 100) / 100,
			cystatin: Math.round(gfrCystatin * 100) / 100,
		});

		// Calculate CKD classification if ACR is provided
		if (acr) {
			calculateCKDClassification(gfrCreatinine, acr);
		}
	};

	const calculateCKDClassification = (gfr: number, acrValue: string) => {
		let gfrCategory = "";
		let acrCategory = "";
		let ckdClassification = "";
		let riskOfProgression = "";
		let monitoringFrequency = "";
		let nephrologistReferral = "";

		// GFR Category
		if (gfr >= 90) gfrCategory = "G1 (Normal or High)";
		else if (gfr >= 60) gfrCategory = "G2 (Mildly Decreased)";
		else if (gfr >= 45)
			gfrCategory = "G3a (Mildly to Moderately Decreased)";
		else if (gfr >= 30)
			gfrCategory = "G3b (Moderately to Severely Decreased)";
		else if (gfr >= 15) gfrCategory = "G4 (Severely Decreased)";
		else gfrCategory = "G5 (Kidney Failure)";

		// ACR Category
		if (acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol")
			acrCategory = "A1 (Normal to Mildly Increased)";
		else if (acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol")
			acrCategory = "A2 (Moderately Increased)";
		else acrCategory = "A3 (Severely Increased)";

		// CKD Classification
		if (
			gfr >= 60 &&
			(acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol")
		) {
			ckdClassification = "No CKD";
		} else if (
			gfr >= 60 &&
			(acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol")
		) {
			ckdClassification = "CKD G1A2";
		} else if (
			gfr >= 60 &&
			(acrValue === ">300 mg/g" || acrValue === ">30 mg/mmol")
		) {
			ckdClassification = "CKD G1A3";
		} else if (gfr >= 45 && gfr < 60) {
			ckdClassification = `CKD G3aA${
				acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol"
					? "1"
					: acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol"
					? "2"
					: "3"
			}`;
		} else if (gfr >= 30 && gfr < 45) {
			ckdClassification = `CKD G3bA${
				acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol"
					? "1"
					: acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol"
					? "2"
					: "3"
			}`;
		} else if (gfr >= 15 && gfr < 30) {
			ckdClassification = `CKD G4A${
				acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol"
					? "1"
					: acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol"
					? "2"
					: "3"
			}`;
		} else if (gfr < 15) {
			ckdClassification = `CKD G5A${
				acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol"
					? "1"
					: acrValue === "30-300 mg/g" || acrValue === "3-30 mg/mmol"
					? "2"
					: "3"
			}`;
		}

		// Risk of Progression
		if (
			gfr >= 60 &&
			(acrValue === "<30 mg/g" || acrValue === "<3 mg/mmol")
		) {
			riskOfProgression = "Low";
		} else if (
			(gfr >= 45 && gfr < 60) ||
			acrValue === "30-300 mg/g" ||
			acrValue === "3-30 mg/mmol"
		) {
			riskOfProgression = "Moderately Increased";
		} else if (
			gfr < 45 ||
			acrValue === ">300 mg/g" ||
			acrValue === ">30 mg/mmol"
		) {
			riskOfProgression = "High";
		} else if (gfr < 30) {
			riskOfProgression = "Very High";
		}

		// Monitoring Frequency
		if (riskOfProgression === "Low") monitoringFrequency = "Annually";
		else if (riskOfProgression === "Moderately Increased")
			monitoringFrequency = "Every 6 months";
		else if (riskOfProgression === "High")
			monitoringFrequency = "Every 3 months";
		else monitoringFrequency = "Every 1-3 months";

		// Nephrologist Referral
		if (
			gfr < 30 ||
			acrValue === ">300 mg/g" ||
			acrValue === ">30 mg/mmol"
		) {
			nephrologistReferral = "Yes";
		} else if (gfr < 45) {
			nephrologistReferral = "Consider";
		} else {
			nephrologistReferral = "No";
		}

		setCkdResults({
			gfrCategory,
			acrCategory,
			ckdClassification,
			riskOfProgression,
			monitoringFrequency,
			nephrologistReferral,
		});
	};

	const resetCalculator = () => {
		setAge("");
		setSex("");
		setCreatinine("");
		setCystatin("");
		setStandardizedAssays("Yes");
		setAdjustBSA("No");
		setHeight("");
		setWeight("");
		setHeightUnit("Inches");
		setWeightUnit("Pounds");
		setAcr("");
		setResults(null);
		setCkdResults(null);
	};

	return (
		<div className='container mx-auto px-4 py-8 max-w-4xl'>
			<div className='text-center mb-8'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>
					eGFR Calculator
				</h1>
				<p className='text-lg text-gray-600'>
					Estimate Glomerular Filtration Rate using the latest CKD-EPI
					equations
				</p>
				<p className='text-sm text-gray-500 mt-2'>
					Based on the National Kidney Foundation&apos;s professional
					calculator
				</p>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
				{/* Input Form */}
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center gap-2'>
							<Calculator className='h-5 w-5' />
							Calculator Inputs
						</CardTitle>
						<CardDescription>
							Enter patient information to calculate eGFR
						</CardDescription>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<Label htmlFor='age'>Age *</Label>
								<Input
									id='age'
									type='number'
									value={age}
									onChange={(e) => setAge(e.target.value)}
									placeholder='Age'
									min='18'
									max='120'
								/>
							</div>
							<div>
								<Label htmlFor='sex'>Sex *</Label>
								<Select value={sex} onValueChange={setSex}>
									<SelectTrigger>
										<SelectValue placeholder='Select sex' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='Male'>
											Male
										</SelectItem>
										<SelectItem value='Female'>
											Female
										</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div>
							<Label htmlFor='creatinine'>
								Serum Creatinine (mg/dL) *
							</Label>
							<Input
								id='creatinine'
								type='number'
								value={creatinine}
								onChange={(e) => setCreatinine(e.target.value)}
								placeholder='Creatinine'
								step='0.01'
								min='0.1'
							/>
						</div>

						<div>
							<Label htmlFor='cystatin'>
								Serum Cystatin C (mg/L) - Optional
							</Label>
							<Input
								id='cystatin'
								type='number'
								value={cystatin}
								onChange={(e) => setCystatin(e.target.value)}
								placeholder='Cystatin C'
								step='0.01'
								min='0.1'
							/>
							<p className='text-xs text-gray-500 mt-1'>
								If provided, will calculate creatinine-cystatin
								and cystatin-only equations
							</p>
						</div>

						<div>
							<Label>Standardized Assays *</Label>
							<RadioGroup
								value={standardizedAssays}
								onValueChange={setStandardizedAssays}>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='Yes'
										id='assays-yes'
									/>
									<Label htmlFor='assays-yes'>Yes</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='No' id='assays-no' />
									<Label htmlFor='assays-no'>No</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem
										value='Not Sure'
										id='assays-unsure'
									/>
									<Label htmlFor='assays-unsure'>
										Not Sure
									</Label>
								</div>
							</RadioGroup>
						</div>

						<div>
							<Label>Adjust for Body Surface Area</Label>
							<RadioGroup
								value={adjustBSA}
								onValueChange={setAdjustBSA}>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='No' id='bsa-no' />
									<Label htmlFor='bsa-no'>
										No (Indexed to 1.73m²)
									</Label>
								</div>
								<div className='flex items-center space-x-2'>
									<RadioGroupItem value='Yes' id='bsa-yes' />
									<Label htmlFor='bsa-yes'>
										Yes (Non-indexed)
									</Label>
								</div>
							</RadioGroup>
						</div>

						{adjustBSA === "Yes" && (
							<div className='grid grid-cols-2 gap-4'>
								<div>
									<Label htmlFor='height'>Height</Label>
									<div className='flex gap-2'>
										<Input
											id='height'
											type='number'
											value={height}
											onChange={(e) =>
												setHeight(e.target.value)
											}
											placeholder='Height'
										/>
										<Select
											value={heightUnit}
											onValueChange={setHeightUnit}>
											<SelectTrigger className='w-24'>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='Inches'>
													Inches
												</SelectItem>
												<SelectItem value='Centimeters'>
													cm
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
								<div>
									<Label htmlFor='weight'>Weight</Label>
									<div className='flex gap-2'>
										<Input
											id='weight'
											type='number'
											value={weight}
											onChange={(e) =>
												setWeight(e.target.value)
											}
											placeholder='Weight'
										/>
										<Select
											value={weightUnit}
											onValueChange={setWeightUnit}>
											<SelectTrigger className='w-24'>
												<SelectValue />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='Pounds'>
													lbs
												</SelectItem>
												<SelectItem value='Kilograms'>
													kg
												</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						)}

						<div>
							<Label htmlFor='acr'>
								Albumin-to-Creatinine Ratio (ACR) - Optional
							</Label>
							<Select value={acr} onValueChange={setAcr}>
								<SelectTrigger>
									<SelectValue placeholder='Select ACR category' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='<30 mg/g'>
										&lt;30 mg/g
									</SelectItem>
									<SelectItem value='30-300 mg/g'>
										30-300 mg/g
									</SelectItem>
									<SelectItem value='>300 mg/g'>
										&gt;300 mg/g
									</SelectItem>
									<SelectItem value='<3 mg/mmol'>
										&lt;3 mg/mmol
									</SelectItem>
									<SelectItem value='3-30 mg/mmol'>
										3-30 mg/mmol
									</SelectItem>
									<SelectItem value='>30 mg/mmol'>
										&gt;30 mg/mmol
									</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className='flex gap-2'>
							<Button onClick={calculateeGFR} className='flex-1'>
								Calculate eGFR
							</Button>
							<Button onClick={resetCalculator} variant='outline'>
								Reset
							</Button>
						</div>
					</CardContent>
				</Card>

				{/* Results */}
				<div className='space-y-6'>
					{results && (
						<Card>
							<CardHeader>
								<CardTitle>eGFR Results</CardTitle>
								<CardDescription>
									Estimated Glomerular Filtration Rate values
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-1 gap-3'>
									<div className='flex justify-between items-center p-3 bg-blue-50 rounded-lg'>
										<span className='font-medium'>
											CKD-EPI Creatinine (2021):
										</span>
										<Badge
											variant='secondary'
											className='text-lg'>
											{results.creatinine}{" "}
											{adjustBSA === "Yes"
												? "mL/min"
												: "mL/min/1.73m²"}
										</Badge>
									</div>

									{results.creatinineCystatin > 0 && (
										<div className='flex justify-between items-center p-3 bg-green-50 rounded-lg'>
											<span className='font-medium'>
												CKD-EPI Creatinine-Cystatin
												(2021):
											</span>
											<Badge
												variant='secondary'
												className='text-lg'>
												{results.creatinineCystatin}{" "}
												{adjustBSA === "Yes"
													? "mL/min"
													: "mL/min/1.73m²"}
											</Badge>
										</div>
									)}

									{results.cystatin > 0 && (
										<div className='flex justify-between items-center p-3 bg-purple-50 rounded-lg'>
											<span className='font-medium'>
												CKD-EPI Cystatin C (2012):
											</span>
											<Badge
												variant='secondary'
												className='text-lg'>
												{results.cystatin}{" "}
												{adjustBSA === "Yes"
													? "mL/min"
													: "mL/min/1.73m²"}
											</Badge>
										</div>
									)}
								</div>

								<div className='flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
									<Info className='h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0' />
									<div className='text-sm text-blue-800'>
										<strong>Note:</strong> For persons under
										18 years of age, use the pediatric GFR
										calculator.
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{ckdResults && (
						<Card>
							<CardHeader>
								<CardTitle>CKD Classification</CardTitle>
								<CardDescription>
									Chronic Kidney Disease staging and
									recommendations
								</CardDescription>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='grid grid-cols-1 gap-3'>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											GFR Category:
										</span>
										<Badge variant='outline'>
											{ckdResults.gfrCategory}
										</Badge>
									</div>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											ACR Category:
										</span>
										<Badge variant='outline'>
											{ckdResults.acrCategory}
										</Badge>
									</div>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											CKD Classification:
										</span>
										<Badge
											variant={
												ckdResults.ckdClassification ===
												"No CKD"
													? "secondary"
													: "destructive"
											}>
											{ckdResults.ckdClassification}
										</Badge>
									</div>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											Risk of Progression:
										</span>
										<Badge
											variant={
												ckdResults.riskOfProgression ===
												"Low"
													? "secondary"
													: ckdResults.riskOfProgression ===
													  "Moderately Increased"
													? "default"
													: ckdResults.riskOfProgression ===
													  "High"
													? "destructive"
													: "destructive"
											}>
											{ckdResults.riskOfProgression}
										</Badge>
									</div>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											Monitoring Frequency:
										</span>
										<Badge variant='outline'>
											{ckdResults.monitoringFrequency}
										</Badge>
									</div>
									<div className='flex justify-between items-center'>
										<span className='font-medium'>
											Nephrologist Referral:
										</span>
										<Badge
											variant={
												ckdResults.nephrologistReferral ===
												"Yes"
													? "destructive"
													: ckdResults.nephrologistReferral ===
													  "Consider"
													? "default"
													: "secondary"
											}>
											{ckdResults.nephrologistReferral}
										</Badge>
									</div>
								</div>

								<div className='flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
									<AlertTriangle className='h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0' />
									<div className='text-sm text-amber-800'>
										<strong>CKD Criteria:</strong> Either
										GFR less than 60 for ≥3 months OR ACR
										≥30 mg/g (or other markers of kidney
										damage) must be present for ≥3 months to
										be classified as CKD.
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Information Card */}
					<Card>
						<CardHeader>
							<CardTitle>About eGFR</CardTitle>
						</CardHeader>
						<CardContent className='space-y-3 text-sm'>
							<p>
								<strong>eGFR</strong> (estimated Glomerular
								Filtration Rate) is a measure of how well your
								kidneys are working. It estimates the volume of
								blood that is filtered by the kidneys per
								minute.
							</p>
							<p>
								<strong>Normal eGFR:</strong> 90 mL/min/1.73m²
								or higher indicates normal kidney function.
							</p>
							<p>
								<strong>Decreased eGFR:</strong> Values below 60
								mL/min/1.73m² for 3 months or more may indicate
								chronic kidney disease.
							</p>
							<p>
								<strong>Important:</strong> This calculator is
								for adults 18 years and older. Always consult
								with a healthcare provider for proper
								interpretation of results.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>

			{/* Full Width Section - Monitoring and Recovery Tips */}
			<div className='mt-12 space-y-6'>
				{/* Why Monitor eGFR Card */}
				<Card>
					<CardHeader>
						<CardTitle>Why Monitor eGFR?</CardTitle>
					</CardHeader>
					<CardContent className='space-y-3 text-sm'>
						<div className='space-y-2'>
							<p>
								<strong>Early Detection:</strong> eGFR helps
								identify kidney problems before symptoms appear.
							</p>
							<p>
								<strong>Disease Progression:</strong> Tracks how
								kidney function changes over time.
							</p>
							<p>
								<strong>Treatment Planning:</strong> Guides
								medication dosages and treatment decisions.
							</p>
							<p>
								<strong>Prevention:</strong> Identifies risk
								factors for kidney disease progression.
							</p>
							<p>
								<strong>Quality of Life:</strong> Early
								intervention can prevent complications and
								improve outcomes.
							</p>
						</div>
					</CardContent>
				</Card>

				{/* Kidney Health Recovery Tips */}
				<Card>
					<CardHeader>
						<CardTitle>Kidney Health Recovery Tips</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4 text-sm'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							<div>
								<h4 className='font-semibold text-green-700 mb-2'>
									💧 Hydration & Diet
								</h4>
								<ul className='space-y-1 text-gray-700'>
									<li>
										• Drink 6-8 glasses of water daily
										(unless restricted by doctor)
									</li>
									<li>
										• Follow a kidney-friendly diet low in
										sodium, potassium, and phosphorus
									</li>
									<li>
										• Limit protein intake if recommended by
										your healthcare provider
									</li>
									<li>
										• Choose fresh foods over processed
										items
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-semibold text-blue-700 mb-2'>
									🏃‍♂️ Lifestyle Changes
								</h4>
								<ul className='space-y-1 text-gray-700'>
									<li>
										• Exercise regularly (30 minutes daily,
										5 days/week)
									</li>
									<li>• Maintain a healthy weight</li>
									<li>• Quit smoking and limit alcohol</li>
									<li>• Get 7-9 hours of quality sleep</li>
								</ul>
							</div>

							<div>
								<h4 className='font-semibold text-purple-700 mb-2'>
									💊 Medication Management
								</h4>
								<ul className='space-y-1 text-gray-700'>
									<li>
										• Take medications exactly as prescribed
									</li>
									<li>
										• Avoid NSAIDs (ibuprofen, naproxen)
										without doctor approval
									</li>
									<li>• Regular blood pressure monitoring</li>
									<li>
										• Keep diabetes under control if
										applicable
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-semibold text-orange-700 mb-2'>
									🔍 Monitoring & Prevention
								</h4>
								<ul className='space-y-1 text-gray-700'>
									<li>
										• Regular check-ups with your healthcare
										provider
									</li>
									<li>• Monitor blood pressure at home</li>
									<li>• Annual kidney function tests</li>
									<li>
										• Be aware of family history of kidney
										disease
									</li>
								</ul>
							</div>

							<div>
								<h4 className='font-semibold text-red-700 mb-2'>
									⚠️ Warning Signs
								</h4>
								<ul className='space-y-1 text-gray-700'>
									<li>• Swelling in legs, ankles, or feet</li>
									<li>• Fatigue and weakness</li>
									<li>
										• Changes in urination frequency or
										color
									</li>
									<li>
										• High blood pressure that&apos;s hard
										to control
									</li>
									<li>
										• Nausea, vomiting, or loss of appetite
									</li>
								</ul>
							</div>
						</div>

						<div className='mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg'>
							<p className='text-amber-800 text-sm'>
								<strong>Remember:</strong> These tips are
								general guidelines. Always follow your
								healthcare provider&apos;s specific
								recommendations for your individual situation.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
