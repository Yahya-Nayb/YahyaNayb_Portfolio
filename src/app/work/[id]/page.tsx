import { notFound } from 'next/navigation';
import WorkDetailView from '@/components/ui/WorkDetailView';
import { WORK_PROJECTS, getWorkById } from '@/data/projects';

export function generateStaticParams() {
  return WORK_PROJECTS.map((project) => ({ id: project.id }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getWorkById(id);

  if (!project) notFound();

  return <WorkDetailView project={project} />;
}
