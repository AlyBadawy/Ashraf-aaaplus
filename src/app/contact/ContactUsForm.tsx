import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const ContactUsForm = () => {
  return (
    <div className='mt-4 flex flex-col gap-4 text-emerald-300'>
      <Input type='text' placeholder='Your name' />
      <Input type='email' placeholder='Your email' />
      <Input type='tel' placeholder='Phone number' />

      <Select required>
        <SelectTrigger>
          <SelectValue placeholder='Preferred Contact Method' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='email'>Email</SelectItem>
          <SelectItem value='phone'>Phone</SelectItem>
          <SelectItem value='text Message'>Text Message</SelectItem>
        </SelectContent>
      </Select>

      <Select required>
        <SelectTrigger>
          <SelectValue placeholder='Reason' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='general inquiry'>General Inquiry</SelectItem>
          <SelectItem value='Request a Call'>Request a Call</SelectItem>
          <SelectItem value='Schedule an Appointment'>
            Schedule an Appointment
          </SelectItem>
        </SelectContent>
      </Select>

      <Textarea placeholder='Type your message here.' rows={8} />

      <Button className='self-end bg-emerald-300' variant='secondary'>
        Send Message
      </Button>
    </div>
  );
};
