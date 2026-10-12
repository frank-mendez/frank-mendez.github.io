import { useState } from 'react'
import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
import Contact from '../pages/contact/Contact'
export default function ContactFormLink() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="pf-text-link" variant="link">
                    Send a project brief ↗
                </Button>
            </SheetTrigger>
            <SheetContent className="pf-contact-form">
                <DialogTitle className="sr-only">Send Frank a project brief</DialogTitle>
                <DialogDescription className="sr-only">
                    Share your project details using the contact form or book a discovery call.
                </DialogDescription>
                <Contact />
            </SheetContent>
        </Sheet>
    )
}
