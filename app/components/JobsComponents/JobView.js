'use client'
import { useEffect, useState } from 'react'
import axios from '@/app/lib/axios'
import Link from 'next/link'
//import { gsap, ScrollTrigger } from 'gsap'
import { useInView } from 'react-intersection-observer'
import LoadingTwo from '../Loading'
import { toast } from 'react-toastify'

import Image from 'next/image'
import UserOne from '@/public/images/jobs/job-review-1.png'
import UserTwo from '@/public/images/jobs/job-review-2.png'
import UserThree from '@/public/images/jobs/job-review-3.png'
import UserFour from '@/public/images/jobs/job-review-4.png'
import UserFive from '@/public/images/jobs/job-review-5.png'
import StarRating from '@/public/images/jobs/ratings-star.png'
import SearchGlass from '@/public/images/jobs/search-glass.png'
import NewsLetterCard from '../NewsLetterCard'

export default function JobView() {
    const [jobs, setJobs] = useState([])
    const [searchFilter, setSearchFilter] = useState('')
    const [loading, setLoading] = useState(false)
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/jobs'

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '0px', //triggers when the div is -50px up
    })

    useEffect(() => {
        const axios = require('axios')
        let config = {
            method: 'GET',
            url: url,
        }
        // Fetch job data from your API
        setLoading(true)
        axios
            .request(config)
            .then(response => {
                setJobs(response.data.jobs)
                setLoading(false)
            })
            .catch(error => {
                setLoading(false)
                toast.error(error.message, {
                    position: 'top-right',
                    autoClose: 3000,
                })
            })
    }, [])

    return (
        <>
            {loading && <LoadingTwo />}
            <section
                ref={ref}
                className={`duration-500 w-full ${
                    inView
                        ? 'opacity-1 translate-y-0'
                        : 'opacity-0 translate-y-2'
                }`}>
                <section className="w-containerWidth max-w-[95%] mx-auto">
                    <div className="w-full flex flex-col items-center pt-16 md:pt-20 pb-8">
                        <div className="w-[59px] h-[28px] rounded-full flex mb-4 md:mb-8 justify-center items-center bg-tremor-background-darkYellow/10">
                            <p className="text-[10px] font-normal text-tremor-background-darkYellow">
                                Jobs
                            </p>{' '}
                        </div>
                        <h3
                            className={`md:font-bold max-w-[95%] text-center w-max md:text-4xl leading-10 text-xl font-bold mb-4 md:mb-8 text-tremor-brand-madras`}>
                            Jobs of your kind are here for you
                        </h3>
                        <p
                            className={`md:font-medium text-center md:leading-8 w-[870px] max-w-full md:text-base text-sm font-medium mb-4 md:mb-8 text-tremor-brand-boulder`}>
                            Clear and concise job listings, The job search page
                            contains detailed descriptions of the available
                            positions, including the job title, location, and
                            required qualifications.
                        </p>
                        <Link
                            className="h-9 w-[221px] flex justify-center items-center rounded-full border border-[#EAB308]/20 text-[#EAB308] mb-7 md:mb-12 text-sm font-normal"
                            href="/contact">
                            Join Us
                        </Link>
                        <div className="w-[280px] h-[43px] relative">
                            <Image
                                src={UserTwo}
                                alt="User Image"
                                className="absolute top-0 w-[43px] h-full"
                            />
                            <Image
                                src={UserFive}
                                alt="User Image"
                                className="absolute top-0 left-[27px] w-[43px] h-full"
                            />
                            <Image
                                src={UserFour}
                                alt="User Image"
                                className="absolute top-0 left-[54px] w-[43px] h-full"
                            />
                            <Image
                                src={UserThree}
                                alt="User Image"
                                className="absolute top-0 left-[81px] w-[43px] h-full"
                            />
                            <Image
                                src={UserOne}
                                alt="User Image"
                                className="absolute top-0 left-[108px] w-[43px] h-full"
                            />
                            <div className="absolute left-[165px] h-full flex flex-col justify-around">
                                <p className="text-xs text-[#5A5A5A]">
                                    <b>+800</b> Loved Talents
                                </p>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <Image
                                            key={crypto.randomUUID()}
                                            src={StarRating}
                                            alt="Star"
                                            height={20}
                                            width={20}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* job preview section */}
            <section className="w-full">
                <div
                    className={`mx-auto w-containerWidth px-3 lg:px-16 max-w-[95%] mt-5 duration-500`}>
                    <div className="flex w-full relative mt-6 mb-12">
                        <Image
                            src={SearchGlass}
                            alt="Search Glass"
                            className="absolute top-[22px] left-5"
                        />
                        <input
                            placeholder="Search..."
                            value={searchFilter}
                            onChange={e => setSearchFilter(e.target.value)}
                            className="w-full h-[60px] bg-transparent outline-none border placeholder:text-[#D1D1D1] border-[#D2D2D2] text-lg text-tremor-brand-boulder rounded-3xl pr-5 pl-[48px] py-2"
                        />
                    </div>

                    {jobs[0] && (
                        <div className="w-full pt-9 flex flex-wrap gap-6">
                            {jobs.filter(job =>
                                job.title
                                    .toLowerCase()
                                    .includes(searchFilter.toLowerCase()),
                            ).length === 0 && (
                                // <Image
                                //     src={NoJob}
                                //     alt="No Job Found"
                                //     className="mx-auto"
                                // />
                                <h3 className='text-xl font-semibold text-black/90" mx-auto'>
                                    No Job Found
                                </h3>
                            )}
                            {jobs
                                .filter(job =>
                                    job.title
                                        .toLowerCase()
                                        .includes(searchFilter.toLowerCase()),
                                )
                                .map((job, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="w-full h-max md:w-[calc(50%-12px)] min-h-[205px] border-b md:border-none flex flex-wrap pb-5 justify-between md:flex-col items-center gap-y-2">
                                            <div className="flex gap-5 flex-wrap md:flex-col items-start md:items-center">
                                                <img
                                                    src={
                                                        job.hiringOrganization
                                                            .logo &&
                                                        job.hiringOrganization
                                                            .logo[0]
                                                            ? job
                                                                  .hiringOrganization
                                                                  .logo[0]
                                                            : '/images/jobs/company_logo.JPG'
                                                    }
                                                    alt="LOGO"
                                                    className={`md:w-max md:h-[185px] object-contain w-[206px] h-[150px]`}
                                                />
                                                <div className="flex flex-col gap-1.5 md:items-center">
                                                    <p className="text-sm font-normal text-[#B0B0B0]">
                                                        {
                                                            job
                                                                .hiringOrganization
                                                                .name
                                                        }
                                                    </p>
                                                    <p className="text-xl font-semibold text-black/90">
                                                        {job.title}
                                                    </p>
                                                    <p
                                                        className="text-[15px] font-normal text-[#7B7B7B] md:text-center"
                                                        dangerouslySetInnerHTML={{
                                                            __html:
                                                                job.description
                                                                    .length >
                                                                219
                                                                    ? job.description
                                                                          .slice(
                                                                              0,
                                                                              216,
                                                                          )
                                                                          .concat(
                                                                              '...',
                                                                          )
                                                                    : job.description,
                                                        }}></p>
                                                    <div className="flex gap-1.5 flex-wrap">
                                                        <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {job.baseSalary
                                                                .value.value +
                                                                ' ' +
                                                                job.baseSalary
                                                                    .currency +
                                                                ' ' +
                                                                'Per' +
                                                                ' ' +
                                                                job.baseSalary
                                                                    .value
                                                                    .unitText}
                                                        </div>
                                                        <div className="px-5 bg-[#E2E2E2] rounded py-1 text-black/80 text-[10px] font-normal">
                                                            {
                                                                job.jobLocationType
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 items-center md:mt-2 md:mx-auto">
                                                <Link
                                                    href={job.apply}
                                                    className={`w-24 lg:w-28 py-2 hover:scale-105 rounded-full text-xs font-bold duration-300 text-white bg-yellow-500 flex justify-center`}>
                                                    Apply
                                                </Link>
                                                <Link
                                                    href={`/jobs/${job.slug}`}
                                                    as={`/jobs/${job.slug}`}
                                                    className="text-xs font-normal text-black/60">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            {/* <Link
                                className="h-9 w-[221px] mx-auto mt-5 flex justify-center items-center rounded-full border border-[#EAB308]/20 text-[#EAB308] mb-7 md:mb-12 text-sm font-normal"
                                href="#">
                                Explore More
                            </Link> */}
                        </div>
                    )}
                </div>
                {/* Call to action */}
                <aside className="flex mx-auto w-containerWidth max-w-[95%] justify-center pt-9 pb-16">
                    <NewsLetterCard />
                </aside>
            </section>
        </>
    )
}
