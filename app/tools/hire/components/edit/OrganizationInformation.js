'use client'
import { useState, useEffect, useRef } from 'react'
import CreateJobLayout from './layout'
import Cookies from 'js-cookie'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import DashboardLoader from '@/app/components/DashboardLoader'
import FileInput from '@/app/components/FileInput'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

export default function OrganizationInformation() {
    const pathname = usePathname()
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [organizationName, setOrganizationName] = useState('')
    const [organizationUrl, setOrganizationUrl] = useState('')
    const [logoFile, setLogoFile] = useState(null)
    const [logoUrl, setLogoUrl] = useState('')
    const [isUrlType, setIsUrlType] = useState(false)
    const [allFieldEntered, setAllFieldEnter] = useState(true)
    const [editID, setEditId] = useState(0)
    const submitButtonRef = useRef()
    let slug = pathname.slice(17, pathname.length).split('/')[0]

    useEffect(() => {
        let authData = JSON.parse(Cookies.get('analogueshifts'))
        let storedData = Cookies.get('jobEditIngData')
        if (storedData) {
            if (JSON.parse(storedData).organizationInformation) {
                var organizationInformationData = JSON.parse(storedData)
                    .organizationInformation
                setOrganizationName(
                    organizationInformationData.organizationName,
                )
                setOrganizationUrl(organizationInformationData.organizationUrl)
            }
            setEditId(JSON.parse(storedData).editId)
        } else if (
            !storedData ||
            !JSON.parse(storedData).jobInformation ||
            !JSON.parse(storedData).jobDetails ||
            !JSON.parse(storedData).jobLocation
        ) {
            router.push(`/tools/hire/edit/${slug}/job-information`)
        }
        if (authData) {
            setUser(authData)
        }
    }, [])

    // Check if all inputs have been filled
    useEffect(() => {
        var returnValue = false
        ;[organizationName].forEach(item => {
            if (item === '') {
                returnValue = true
            }
        })
        setAllFieldEnter(returnValue)
    }, [organizationName])

    // Make request
    const editJob = data => {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/hire/' + editID
        const axios = require('axios')
        let config = {
            method: 'PUT',
            url: url,
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + user.token,
            },
            data: data,
        }

        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setLoading(false)
                toast.success('Your Post Has Been Edited Successfully', {
                    position: 'top-right',
                    autoClose: 3000,
                })
                router.push('/tools/hire')
            })
            .catch(error => {
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
                setLoading(false)
            })
    }

    const submit = e => {
        e.preventDefault()
        let storedData = Cookies.get('jobEditIngData')
        let existingItem = JSON.parse(storedData)
        let data = {
            title: existingItem.jobInformation.title,
            description: existingItem.jobInformation.description,
            identifier: {
                '@type': 'PropertyValue',
                name: existingItem.jobInformation.identifierName,
                value: existingItem.jobInformation.identifierValue,
            },
            datePosted: existingItem.jobInformation.datePosted,
            validThrough: existingItem.jobInformation.validThrough,
            employmentType: existingItem.jobDetails.employmentType.name,
            hiringOrganization: {
                '@type': 'Organization',
                name: organizationName,
                sameAs: organizationUrl,
                logo: isUrlType ? logoUrl : logoFile,
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: existingItem.jobLocation.streetAddress,
                    addressLocality: existingItem.jobLocation.addressLocality,
                    addressRegion: existingItem.jobLocation.addressRegion,
                    postalCode: existingItem.jobLocation.postalCode,
                    addressCountry: existingItem.jobLocation.addressCountry,
                },
            },
            jobLocationType: existingItem.jobLocation.jobLocationType.name,
            applicantLocationRequirements: [
                ...existingItem.jobLocation.stateRequirements,
                ...existingItem.jobLocation.countryRequirements,
            ],
            baseSalary: {
                '@type': 'MonetaryAmount',
                currency: existingItem.jobDetails.salaryCurrency.name,
                value: {
                    '@type': 'QuantitativeValue',
                    value: existingItem.jobDetails.salaryValue,
                    unitText: existingItem.jobDetails.salaryUnitText.name,
                },
            },
            apply: existingItem.jobDetails.apply,
        }
        editJob(data)
    }

    return (
        <CreateJobLayout>
            {loading && <DashboardLoader />}
            <form onSubmit={submit} className="w-full flex flex-col gap-6">
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION NAME
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            The official name of the company or organization
                            offering the job
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            required
                            type="text"
                            value={organizationName}
                            onChange={e => setOrganizationName(e.target.value)}
                            placeholder="e.g “AnalogueShifts”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION WEBSITE
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This refers to the web address (URL) of the
                            organization's official website.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <input
                            type="url"
                            value={organizationUrl}
                            onChange={e => setOrganizationUrl(e.target.value)}
                            placeholder="e.g “www.analogueshifts.com”"
                            className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                        />
                    </div>
                </div>
                <div className="w-full pb-6 border-b border-tremor-brand-boulder200 flex flex-col md:justify-between md:flex-row gap-y-4">
                    <div className="w-full md:w-1/2 flex flex-col gap-4 md:pr-5">
                        <p className="text-sm font-normal text-tremor-brand-boulder400">
                            ORGANIZATION LOGO
                        </p>
                        <p className="font-light text-[13px] text-tremor-brand-boulder900">
                            This is the graphical symbol or emblem representing
                            the organization.
                        </p>
                        <div className="w-full flex items-center flex-wrap gap-2.5">
                            <p className="font-light text-[13px] text-tremor-brand-boulder900">
                                Use Url Format
                            </p>
                            <div
                                className="switch"
                                data-isOn={isUrlType}
                                onClick={() => setIsUrlType(!isUrlType)}>
                                <motion.div
                                    className="handle"
                                    layout
                                    transition={{
                                        opacity: { ease: 'linear' },
                                        layout: { duration: 0.3 },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        {!isUrlType ? (
                            <FileInput
                                value={logoFile}
                                setValue={value => setLogoFile(value)}
                            />
                        ) : (
                            <input
                                type="url"
                                value={logoUrl}
                                onChange={e => setLogoUrl(e.target.value)}
                                placeholder="e.g “www.analogueshifts.com/logo.png”"
                                className="max-w-full w-full h-14 rounded-2xl  px-5 border border-tremor-brand-boulder200 text-[13px] font-light placeholder:text-tremor-brand-boulder300 text-tremor-brand-boulder950 outline-1 outline-tremor-background-darkYellow"
                            />
                        )}
                    </div>
                </div>

                <input
                    ref={submitButtonRef}
                    type="submit"
                    className="-z-10 opacity-0"
                />
            </form>
            <div className="flex w-full justify-between">
                <Link
                    href={`/tools/hire/edit/${slug}/job-location`}
                    className={`px-6 text-tremor-background-darkYellow text-base border duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-transparent border-tremor-background-darkYellow rounded-full`}>
                    <i className="fas fa-arrow-left "></i> Previous
                </Link>
                <button
                    disabled={allFieldEntered}
                    onClick={() => submitButtonRef.current.click()}
                    type="button"
                    className={`px-6 text-[#FEFEFE] text-base duration-300 hover:scale-105 font-normal flex items-center gap-2 h-10 bg-tremor-background-darkYellow rounded-full border-none ${
                        allFieldEntered ? 'opacity-50' : 'opacity-100'
                    }`}>
                    Edit Job
                </button>
            </div>
        </CreateJobLayout>
    )
}
