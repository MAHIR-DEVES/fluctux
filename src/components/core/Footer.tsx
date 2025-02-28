"use client"
import React from 'react'
import Link from 'next/link';
import { FOOTER_MAIN_ITEMS, LEGAL_ITEMS, PLAN_ITEMS, RESOURCES_ITEMS, WORK_MANAGEMENT_ITEMS } from '@/constants/footer';
import { DiscordIcon, GithubCircleIcon, XLogoIcon } from '../ui/icons';
import { FxFavIcon } from '../ui';
import { useThemeSwitcher } from '@/app/hooks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ThemeSwitcher } = useThemeSwitcher()
  return (
    <footer className='w-full mt-auto'>
      <div className='mt-24 border-t fx-border-color w-full fx-flex-center pl-3 pr-3 pt-10 pb-10 fx-primary-bg'>
        <div className='fx-layout-max-1200'>
          <div className='w-full grid grid-cols-[1fr_1fr_1fr_1fr_1fr] justify-center items-start'>

            <div className='w-fit'>
              <FxFavIcon variant='default' />
              <ul className='fx-label-color mt-3 leading-8'>
                {
                  FOOTER_MAIN_ITEMS.map((item, i) => {
                    return <Link href={`${item.slug}`} key={i}>
                      <li className='hover:text-[var(--primary-color)] text-[15px] font-medium'>{item.label}</li>
                    </Link>
                  })
                }
              </ul>
            </div>

            <div className='w-fit'>
              <p className='text-[16px] font-medium'>Work Management</p>
              <ul className='fx-label-color mt-3 leading-8'>
                {
                  WORK_MANAGEMENT_ITEMS.map((item, i) => {
                    return <Link href={`${item.slug}`} key={i}>
                      <li className='hover:text-[var(--primary-color)] text-[15px] font-medium'>{item.label}</li>
                    </Link>
                  })
                }
              </ul>
            </div>
            <div className='w-fit'>
              <p className='text-[16px] font-medium'>Resources</p>
              <ul className='fx-label-color mt-3 leading-8'>
                {
                  RESOURCES_ITEMS.map((item, i) => {
                    return <Link href={`${item.slug}`} key={i}>
                      <li className='hover:text-[var(--primary-color)] text-[15px] font-medium'>{item.label}</li>
                    </Link>
                  })
                }
              </ul>
            </div>

            <div className='w-fit'>
              <p className='text-[16px] font-medium'>Plans</p>
              <ul className='fx-label-color mt-3 leading-8'>
                {
                  PLAN_ITEMS.map((item, i) => {
                    return <Link href={`${item.slug}`} key={i}>
                      <li className='hover:text-[var(--primary-color)] text-[15px] font-medium'>{item.label}</li>
                    </Link>
                  })
                }
              </ul>
            </div>
            <div className='w-fit'>
              <p className='text-[16px] font-medium'>Legal</p>
              <ul className='fx-label-color mt-3 leading-8'>
                {
                  LEGAL_ITEMS.map((item, i) => {
                    return <Link href={`${item.slug}`} key={i}>
                      <li className='hover:text-[var(--primary-color)] text-[15px] font-medium'>{item.label}</li>
                    </Link>
                  })
                }
              </ul>
            </div>
          </div>
          <div className='w-full fx-flex-between-ic mt-16'>
            <span className='fx-label-color'>&copy; {currentYear} Fluctux</span>
            <div className='fx-flex-center gap-3'>
              <GithubCircleIcon width={24} height={24} className='cursor-pointer' />
              <XLogoIcon width={22} height={22} className='cursor-pointer' />
              <DiscordIcon width={27} height={27} className='cursor-pointer' />
            </div>

            <ThemeSwitcher />

          </div>
        </div>
      </div>
    </footer>
  )
}


